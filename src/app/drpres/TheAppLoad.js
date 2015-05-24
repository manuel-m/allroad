'use strict';

angular.module('drpres')
    .service('TheAppLoad', function (ThePresConf, $q, ThePres) {

        var self = this;

        self.stateLocalLoad = function(){
           return ThePres.stateLocalLoad();

        };

        self.fetch = function () {
            var dfd = $q.defer();
            ThePresConf.fetch().then(
                function (data_) {
                    dfd.resolve(data_);
                },
                function (data_) {
                    console.error(data_);
                }
            );

            return dfd.promise;
        };


    })
;
