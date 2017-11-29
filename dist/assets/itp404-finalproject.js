"use strict";



define('itp404-finalproject/app', ['exports', 'itp404-finalproject/resolver', 'ember-load-initializers', 'itp404-finalproject/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define("itp404-finalproject/components/audio-single", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    data: {
      playing: false,
      preload: "auto",
      type: "audio/wav",
      allow_images: true
    },
    didInsertElement: function didInsertElement() {
      var _this = this;

      this.player_global = document.querySelector("audio#aud_main");

      this.audio = this.$('audio')[0];
      this.playerbutton = this.$('.playerbutton')[0];
      this.playertime = this.$('.player_time')[0];
      this.seek = this.$('.seek')[0];
      this.holder = this.$('.song-holder')[0];
      this.player = this.$('.player')[0];

      this.handleStyle(this);

      this.seek.addEventListener("change", function () {

        if (_this.audio.duration) {
          _this.audio.currentTime = _this.seek.value / 1000 * _this.audio.duration;
        }
      }, true);

      this.audio.addEventListener("loadedmetadata", function () {
        _this.playertime.innerHTML = fmtMSS(Math.floor(_this.audio.currentTime)) + "/" + fmtMSS(Math.floor(_this.audio.duration));
      }, true);

      this.audio.addEventListener("seeked", function () {
        _this.playertime.innerHTML = fmtMSS(Math.floor(_this.audio.currentTime)) + "/" + fmtMSS(Math.floor(_this.audio.duration));
      }, true);

      this.audio.addEventListener("timeupdate", function () {
        _this.playertime.innerHTML = fmtMSS(Math.floor(_this.audio.currentTime)) + "/" + fmtMSS(Math.floor(_this.audio.duration));
        _this.seek.value = _this.audio.currentTime / _this.audio.duration * 1000;
      }, true);
    },
    handleStyle: function handleStyle(ref) {

      ref.player.style.backgroundColor;

      if (this.data.allow_images) {
        if (this.get('img_url') !== undefined) {
          this.holder.classList.add("has_bg");
          this.holder.style.background = "linear-gradient(-45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.65) 100%), url('" + this.get('img_url') + "') no-repeat";
        }
      } else {

        //Nothing
      }
    },

    actions: {

      playAud: function playAud() {

        if (this.audio.paused && !this.audio.ended && this.audio.buffered) {

          //console.log("id: ", this.attrs.id.value);

          // this.sendAction('setActive', {data: this.attrs.id.value, player: this.player });


          this.playerbutton.innerHTML = "pause";
          this.data.playing = true;
          this.data.playing ? this.audio.play() : this.audio.pause();
        } else {
          this.playerbutton.innerHTML = "play_arrow";
          this.data.playing = false;
          this.data.playing ? this.audio.play() : this.audio.pause();
        }
      }

    }

  });


  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }
});
define('itp404-finalproject/components/footer-bar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('itp404-finalproject/components/header-bar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('itp404-finalproject/components/player-audio', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('itp404-finalproject/components/render-songs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      setActive: function setActive(id) {
        this.sendAction('test', id);
        return true;
      }
    },
    data: {

      songs: [{
        id: uuid(),
        title: "Song Name 1",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        imgurl: "https://source.unsplash.com/random/" + uuid() + "?green",
        playercolor: "green"
      }, {
        id: uuid(),
        title: "Song Name 2",
        artist: "@baedan",
        src: "https://www.dropbox.com/s/p26y5uk5b8ek3yd/P.Y.T.%20%28Pretty%20Young%20Thing%29_y32ejtuxSjM_youtube%20R.wav?dl=1",
        tags: ["Podcast", "News"],
        playercolor: "green"
      }, {
        id: uuid(),
        title: "Song Name 3",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        imgurl: "https://source.unsplash.com/random/" + uuid() + "?red",
        playercolor: "red"
      }, {
        id: uuid(),
        title: "Song Name 4",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        playercolor: "red"
      }, {
        id: uuid(),
        title: "Song Name 1",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        imgurl: "https://source.unsplash.com/random/" + uuid() + "?yellow",
        playercolor: "yellow"
      }, {
        id: uuid(),
        title: "Song Name 2",
        artist: "@baedan",
        src: "https://www.dropbox.com/s/p26y5uk5b8ek3yd/P.Y.T.%20%28Pretty%20Young%20Thing%29_y32ejtuxSjM_youtube%20R.wav?dl=1",
        tags: ["Podcast", "News"],
        playercolor: "yellow"
      }, {
        id: uuid(),
        title: "Song Name 3",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        imgurl: "https://source.unsplash.com/random/" + uuid() + "?blue",
        playercolor: ""
      }, {
        id: uuid(),
        title: "Song Name 4",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        playercolor: ""
      }]

    }
  });


  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
});
define('itp404-finalproject/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define("itp404-finalproject/controllers/feed", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      test: function test(id) {
        this.send("setActive", id);
      }
    }
  });
});
define('itp404-finalproject/helpers/app-version', ['exports', 'itp404-finalproject/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('itp404-finalproject/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('itp404-finalproject/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('itp404-finalproject/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'itp404-finalproject/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('itp404-finalproject/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('itp404-finalproject/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('itp404-finalproject/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('itp404-finalproject/initializers/export-application-global', ['exports', 'itp404-finalproject/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('itp404-finalproject/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('itp404-finalproject/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('itp404-finalproject/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("itp404-finalproject/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('itp404-finalproject/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('itp404-finalproject/router', ['exports', 'itp404-finalproject/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('feed', { path: '/' });
    this.route('clips', { path: '/c/:clipid' });
  });

  exports.default = Router;
});
define('itp404-finalproject/routes/clips', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      return params;
    },
    serialize: function serialize(model) {
      return model;
    },
    setupController: function setupController(controller, model) {
      this.controllerFor('clips').set('data', model);
    }
  });
});
define("itp404-finalproject/routes/feed", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    actions: {
      setActive: function setActive(id) {

        console.log("active: ", id);
      }
    }
  });
});
define('itp404-finalproject/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("itp404-finalproject/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/x7FvSXk", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"header-bar\"],false],[0,\"\\n\"],[6,\"audio\"],[9,\"id\",\"aud_main\"],[9,\"controls\",\"none\"],[7],[0,\"\\n\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"header-pad\"],[7],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"header-pad\"],[7],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"header-pad\"],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/application.hbs" } });
});
define("itp404-finalproject/templates/clips", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QAF8PKeS", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"bodymain\"],[7],[0,\"\\n\\n\"],[6,\"div\"],[7],[1,[18,\"clipid\"],false],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/clips.hbs" } });
});
define("itp404-finalproject/templates/components/audio-single", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J01k68Xh", "block": "{\"symbols\":[\"tag\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"song\"],[7],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"song-holder\"],[10,\"data-color\",[18,\"playerColor\"],null],[7],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"title\"],[7],[6,\"a\"],[9,\"class\",\"nostyle\"],[10,\"href\",[26,[\"/c/\",[18,\"id\"]]]],[7],[1,[18,\"title\"],false],[8],[6,\"span\"],[9,\"class\",\"artist\"],[7],[0,\" \"],[1,[18,\"artist\"],false],[8],[8],[0,\"\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"player\"],[7],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"playerbutton\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"playAud\"],null],null],[7],[0,\"play_arrow\"],[8],[0,\"\\n\\n\"],[6,\"input\"],[9,\"class\",\"seek\"],[9,\"value\",\"0\"],[9,\"min\",\"0\"],[9,\"max\",\"1000\"],[9,\"step\",\"1\"],[9,\"type\",\"range\"],[7],[8],[0,\"\\n\\n\"],[6,\"span\"],[9,\"class\",\"player_time\"],[7],[6,\"i\"],[9,\"class\",\"spinner\"],[7],[8],[8],[0,\"\\n\"],[6,\"audio\"],[10,\"preload\",[20,[\"data\",\"preload\"]],null],[7],[0,\"\\n  \"],[6,\"source\"],[10,\"src\",[18,\"src\"],null],[10,\"type\",[20,[\"data\",\"type\"]],null],[7],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"data\"],[7],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"iconholder\"],[7],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"action-icon\"],[7],[0,\"favorite_outline\"],[8],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"action-icon\"],[7],[0,\"repeat\"],[8],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"action-icon\"],[7],[0,\"\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"tagholder\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"tags\"]]],null,{\"statements\":[[6,\"span\"],[9,\"class\",\"tag\"],[7],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[2,\"\\n<div class=\\\"song-details\\\">\\n  <h3>Details</h3>\\n  <p>Details</p>\\n  <p>Details</p>\\n  <p>Details</p>\\n  <p>Details</p>\\n  <p>Details</p>\\n  <p>Details</p>\\n  <p>Details</p>\\n</div> \"],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/components/audio-single.hbs" } });
});
define("itp404-finalproject/templates/components/footer-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sW0d7XST", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"footer-bar\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"footer-inner\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"footer-player\"],[7],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"playerbutton\"],[7],[0,\"play_arrow\"],[8],[0,\"\\n\\n    \"],[6,\"input\"],[9,\"class\",\"seek\"],[9,\"value\",\"0\"],[9,\"min\",\"0\"],[9,\"max\",\"1000\"],[9,\"step\",\"1\"],[9,\"type\",\"range\"],[7],[8],[0,\"\\n\\n    \"],[6,\"span\"],[9,\"class\",\"player_time\"],[7],[6,\"i\"],[9,\"class\",\"spinner\"],[7],[8],[8],[0,\"\\n\\n\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/components/footer-bar.hbs" } });
});
define("itp404-finalproject/templates/components/header-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PpJ3v1Mg", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"header grad fixed\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"header-inner\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"logo-header\"],[7],[0,\"Chorder Pounder\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"search-header\"],[7],[0,\"\\n      \"],[6,\"input\"],[9,\"class\",\"outline\"],[9,\"placeholder\",\"Search\"],[9,\"type\",\"text\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/components/header-bar.hbs" } });
});
define("itp404-finalproject/templates/components/player-audio", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+1/65KQj", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/components/player-audio.hbs" } });
});
define("itp404-finalproject/templates/components/render-songs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Y6EZHsni", "block": "{\"symbols\":[\"song\",\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"songflex\"],[7],[0,\"\\n\\n\\n\"],[4,\"each\",[[19,0,[\"data\",\"songs\"]]],null,{\"statements\":[[0,\"\\n  \"],[1,[25,\"audio-single\",null,[[\"title\",\"artist\",\"src\",\"tags\",\"img_url\",\"id\",\"playerColor\",\"setActive\"],[[19,1,[\"title\"]],[19,1,[\"artist\"]],[19,1,[\"src\"]],[19,1,[\"tags\"]],[19,1,[\"imgurl\"]],[19,1,[\"id\"]],[19,1,[\"playercolor\"]],\"setActive\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/components/render-songs.hbs" } });
});
define("itp404-finalproject/templates/feed", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5QphVBcu", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"bodymain\"],[7],[0,\"\\n\\n  \"],[1,[25,\"render-songs\",null,[[\"test\"],[\"test\"]]],false],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "itp404-finalproject/templates/feed.hbs" } });
});


define('musicapp/config/environment', ['ember'], function(Ember) {
  var prefix = 'musicapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("musicapp/app")["default"].create({"name":"itp404-finalproject","version":"0.0.0+213ceb9a"});
}
//# sourceMappingURL=itp404-finalproject.map
