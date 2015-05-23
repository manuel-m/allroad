'use strict';

angular.module('drpres')
  .service('ThePres', function (ThePresConf,
                                localStorageService) {

    var self = this;

    self.d = {};

    var initProto = function initProto___() {
      return {
        chapterIdx: 0,
        sectionIdx: 0,
        mode: 'list',
        showAllChapters: false,
        fullScreen: false
      };
    };

    self.getBrand = function () {
      return ThePresConf.get().brand;
    };

    self.getMainTitle = function () {
      return ThePresConf.get().mainTitle;
    };

    self.localStore = function () {
      var s = angular.toJson(self.d);
      return localStorageService.set('d', s);
    };

    self.localFetch = function () {
      var p = initProto();
      var l = localStorageService.get('d');

      if (!_.isEmpty(l)) {
        self.d = l;
        // found but could miss some properties so add it ...
        _.forEach(l, function (o_, k_) {
          if (_.isUndefined(self.d[k_])) {
            self.d[k_] = o_;
          }
        });
      } else {
        self.d = p;
      }
    };

    self.getChapters = function () {
      return ThePresConf.get().chapters;
    };

    self.getCurrentChapter = function () {
      return self.getChapters()[self.d.chapterIdx];
    };

    self.getChaptersList = function () {
      if (!self.d.showAllChapters) {
        var arr = [];
        arr.push(self.getCurrentChapter());
        return arr;
      }
      else
      {
        return self.getChapters();
      }
    };

    self.getMode = function () {
      return self.d.mode;

    };

    self.goList = function () {
      self.d.mode = 'list';
      self.localStore();
    };

    self.goTogglePrint = function () {
      if(self.d.mode ==='print') self.d.mode = 'details'; else self.d.mode = 'print';
      self.localStore();
    };

    self.goToggleAllChapters = function () {
      self.d.showAllChapters = !self.d.showAllChapters;
      self.localStore();
    };

    self.goDetails = function () {
      self.d.mode = 'details';
      self.localStore();
    };

    self.toggleFullScreen = function () {
      self.d.fullScreen = !self.d.fullScreen;
    };

    self.isFullScreen = function () {
      return self.d.fullScreen;
    };

    self.goNext = function () {
      var chapter = self.getCurrentChapter();
      if (self.d.mode === 'list') {
        self.d.mode = 'details';
        self.localStore();
        return;
      }

      if (self.d.sectionIdx < (chapter.sections.length - 1)) {
        self.d.sectionIdx++;
        self.localStore();
      }
    };

    self.goFirst = function () {
      if (self.d.mode === 'list') {
        self.d.mode = 'details';
      }
      self.d.sectionIdx = 0;
      self.localStore();

    };

    self.goLast = function () {
      var chapter = self.getCurrentChapter();
      if (self.d.mode === 'list') {
        self.d.mode = 'details';
      }
      self.d.sectionIdx = chapter.sections.length - 1;
      self.localStore();
    };

    self.goPrevious = function () {
      if (self.d.mode === 'list') {
        self.d.mode = 'details';
        self.localStore();
        return;
      }
      if (self.d.sectionIdx > 0) {
        self.d.sectionIdx--;
      }
      self.localStore();
    };

    self.onSelectChapter = function (o_, index_) {
      self.d.mode = 'details';
      self.d.chapterIdx = index_;
      self.d.sectionIdx = 0;
      self.localStore();
    };

    self.getDocPath = function (chapter_,section_) {
      // console.log(section_);
      return ThePresConf.get().baseDir + '/' + chapter_.dir + '/' + section_.doc + '.md';
    };

    self.getCurrentSection = function () {
      return self.getCurrentChapter().sections[self.d.sectionIdx];
    };

    self.getCurrentDocPath = function () {
      return self.getDocPath(self.getCurrentChapter(),self.getCurrentSection());
    };

    self.paginationLabel = function () {
      var chapter = self.getCurrentChapter();
      return '' + (self.d.sectionIdx + 1) + '/' + chapter.sections.length;
    };

    self.sectionsLists = function (chapter_) {

      var s = '';
      if (chapter_.sections.length) {
        s += chapter_.sections[0].heading;
      }
      for (var i = 1; i < chapter_.sections.length; i++) {
        s += ' - ';
        s += chapter_.sections[i].heading;
      }
      return s;

    };

    self.getSections = function (chapter_) {
      //var chapter = self.getCurrentChapter();
      return chapter_.sections;

    };


  })
;