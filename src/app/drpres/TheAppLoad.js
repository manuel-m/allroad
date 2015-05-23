'use strict';

angular.module('drpres')
  .service('TheAppLoad', function (ThePresConf, ThePres,$q) {

    var self = this;

    self.fetch = function () {
      var dfd = $q.defer();

      ThePresConf.fetch().then(
        function(){
          ThePres.localFetch();
          dfd.resolve();
        },
        function(data_){
          console.error(data_);
        }
      );

      return dfd.promise;
    };



  })
;
