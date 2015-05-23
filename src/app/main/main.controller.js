'use strict';

angular.module('allroad')
  .controller('MainCtrl', function (ThePres,
                                    hotkeys,
                                    TheBasicProtect) {

    var vm = this;

    vm.p = TheBasicProtect;
    vm.g = ThePres;

    vm.passwd = '';

    vm.doEnter = function () {
      vm.p.checkCredentials(vm.passwd);
    };

    vm.d = function () {
      return ThePres.d;
    };

    hotkeys.add({
      combo: 'space',
      description: 'go next',
      callback: function () {
        ThePres.goNext();
      }
    });

    hotkeys.add({
      combo: 'right',
      description: 'go next',
      callback: function () {
        ThePres.goNext();
      }
    });

    hotkeys.add({
      combo: 'end',
      description: 'go end',
      callback: function () {
        ThePres.goLast();
      }
    });

    hotkeys.add({
      combo: 'home',
      description: 'go home',
      callback: function () {
        ThePres.goFirst();
      }
    });

    hotkeys.add({
      combo: 'up',
      description: 'go list',
      callback: function () {
        ThePres.goList();
      }
    });

    hotkeys.add({
      combo: 'p',
      description: 'go print',
      callback: function () {
        ThePres.goTogglePrint();
      }
    });

    hotkeys.add({
      combo: 'a',
      description: 'go print',
      callback: function () {
        ThePres.goToggleAllChapters();
      }
    });

    hotkeys.add({
      combo: 'down',
      description: 'go details',
      callback: function () {
        ThePres.goDetails();
      }
    });

    hotkeys.add({
      combo: 'left',
      description: 'go previous',
      callback: function () {
        ThePres.goPrevious();
      }
    });

    hotkeys.add({
      combo: 'f',
      description: 'go previous',
      callback: function () {
        ThePres.toggleFullScreen();
      }
    });

    //hotkeys.add({
    //  combo: 'ctrl+space',
    //  description: 'reload assets',
    //  callback: function() {
    //    ThePres.assetsReload().then(
    //      function(){
    //        $state.go($state.current,{},{reload:true}).then(
    //          function(){
    //            console.log('conf reloaded');
    //            console.log
    //          }
    //        );
    //
    //
    //      }
    //    );
    //  }
    //});


  })
;
