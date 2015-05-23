'use strict';

angular.module('drpres')
  .service('TheBasicProtect', function (ThePresConf, md5) {

    var self = this;
    var granted = false;
    var hasFailed = false;

    self.checkCredentials = function (passwd_) {
      var conf = ThePresConf.get();
      if (!conf.basicProtect.activated) {
        granted = true;
      } else {
        granted = conf.basicProtect.key === md5.createHash(passwd_);
        hasFailed = !granted;
      }
    };

    self.isEnabled = function(){
      var conf = ThePresConf.get();
      return conf.basicProtect.activated;
    };

    self.hasFailed = function () {
      return hasFailed;
    };

    self.isGranted = function () {
      return granted;
    };

    self.showLogin = function(){
      if(!self.isEnabled()){
        return false;
      }
      return (self.isGranted() === false);
    };


  })
;
