'use strict';

define('itp404-finalproject/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/audio-single.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/audio-single.js should pass ESLint\n\n');
  });

  QUnit.test('components/footer-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/footer-bar.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-bar.js should pass ESLint\n\n');
  });

  QUnit.test('components/player-audio.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/player-audio.js should pass ESLint\n\n');
  });

  QUnit.test('components/render-songs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/render-songs.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/feed.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/feed.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/clips.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/clips.js should pass ESLint\n\n');
  });

  QUnit.test('routes/feed.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/feed.js should pass ESLint\n\n8:7 - Unexpected console statement. (no-console)');
  });
});
define('itp404-finalproject/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('itp404-finalproject/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'itp404-finalproject/tests/helpers/start-app', 'itp404-finalproject/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('itp404-finalproject/tests/helpers/resolver', ['exports', 'itp404-finalproject/resolver', 'itp404-finalproject/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('itp404-finalproject/tests/helpers/start-app', ['exports', 'itp404-finalproject/app', 'itp404-finalproject/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('itp404-finalproject/tests/integration/components/audio-single-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('audio-single', 'Integration | Component | audio single', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "CFRGYJFx",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"audio-single\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "s9sKPRQH",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"audio-single\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('itp404-finalproject/tests/integration/components/footer-bar-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('footer-bar', 'Integration | Component | footer bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "V06SNS73",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"footer-bar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "NrF5gKR8",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"footer-bar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('itp404-finalproject/tests/integration/components/header-bar-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('header-bar', 'Integration | Component | header bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "0XkLzmdx",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"header-bar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "FD/stqZK",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"header-bar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('itp404-finalproject/tests/integration/components/player-audio-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('player-audio', 'Integration | Component | player audio', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "a3gAVgRN",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"player-audio\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "YPzQwJnr",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"player-audio\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('itp404-finalproject/tests/integration/components/render-songs-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('render-songs', 'Integration | Component | render songs', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "fOqrxgMU",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"render-songs\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "83AAqVwE",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"render-songs\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('itp404-finalproject/tests/test-helper', ['itp404-finalproject/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('itp404-finalproject/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/audio-single-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/audio-single-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/footer-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/footer-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/header-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/player-audio-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/player-audio-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/render-songs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/render-songs-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/clips-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/clips-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/feed-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/feed-test.js should pass ESLint\n\n');
  });
});
define('itp404-finalproject/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('itp404-finalproject/tests/unit/routes/clips-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:clips', 'Unit | Route | clips', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-finalproject/tests/unit/routes/feed-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:feed', 'Unit | Route | feed', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('musicapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
