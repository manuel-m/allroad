'use strict';

angular.module('drpres')
  .service('ThePresConf', function ($http, $q) {

    var self = this;
    var conf = {};

    var flags = {
      'done': false
    };

    self.get = function getConf__() {
      return conf;
    };

    // for tests purposes
    // => port 3000 is dev test env
    var isDev = function () {
      var re = /:3000|:8000/;
      var wl = window.location;
      return (re.test(wl));
    };

    self.setDone = function (done_) {
      flags.done = done_;
    };

    self.assignConf = function (conf_) {
      conf = conf_;
      conf.isDev = isDev();
    };

    self.fetch = function () {
      var dfd = $q.defer();
      var self = this;

      if (!flags['done']) {
        $http.get('assets/TheContent.json').then(
          function (response_) {
            self.assignConf(response_.data);
            dfd.resolve(response_.data);
            console.log(conf);
          },
          function (failureResponse_) {
            dfd.reject(failureResponse_);
            console.log(failureResponse_);
          });
        flags['done'] = true;
      } else {
        dfd.resolve();
      }

      return dfd.promise;
    };


  })
;
