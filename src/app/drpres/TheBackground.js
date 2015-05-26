'use strict';

angular.module('drpres')
    .service('TheBackground', function (ThePresConf) {

        var self = this;

        self.getBackgroundStyle = function(){
            var conf = ThePresConf.get();

            if(conf.background && conf.background.activated){
                return conf.background.imagePath;
            }
            return '';
        };
    })
;
