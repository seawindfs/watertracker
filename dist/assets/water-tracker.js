"use strict";

define('water-tracker/app', ['exports', 'water-tracker/resolver', 'ember-load-initializers', 'water-tracker/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('water-tracker/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
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
define('water-tracker/helpers/app-version', ['exports', 'water-tracker/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
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
define('water-tracker/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('water-tracker/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('water-tracker/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'water-tracker/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('water-tracker/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('water-tracker/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('water-tracker/initializers/export-application-global', ['exports', 'water-tracker/config/environment'], function (exports, _environment) {
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
          willDestroy: function () {
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
define("water-tracker/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('water-tracker/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('water-tracker/router', ['exports', 'water-tracker/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('products');
    this.route('home');
    this.route('solutions');
  });

  exports.default = Router;
});
define('water-tracker/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('water-tracker/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('water-tracker/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('water-tracker/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('water-tracker/routes/products', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        id: 'WaterTracker1',
        title: 'WaterTracker1 Controller',
        sensors: '1 Sensor Port',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg'
      }, {
        id: 'WaterTracker2',
        title: 'WaterTracker2 Controller',
        sensors: '2 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg'
      }, {
        id: 'WaterTracker3',
        title: 'WaterTracker3 Controller',
        sensors: '3 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg'
      }, {
        id: 'WaterTracker4',
        title: 'WaterTracker4 Controller',
        sensors: '4 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg'
      }, {
        id: '5-PSI-Gauge',
        title: 'PS5G Sensor',
        depth: '11.5 Feet',
        location: 'Do not submerse in liquid.',
        use: 'Cistern Tanks, Shallow Wells',
        thread: '1/8NTP',
        image: '../assets/images/ps5g.jpg'
      }, {
        id: '15-PSI-Gauge',
        title: 'PS15G Sensor',
        depth: '34.5 Feet',
        location: 'Do not submerse in liquid.',
        use: 'Cistern Tanks, Shallow Wells',
        thread: '1/8NTP',
        image: '../assets/images/ps15g.jpg'
      }, {
        id: '30-PSI-Absolute',
        title: 'PS30A Sensor with 100Ft cable.',
        depth: '34.5 Feet',
        location: 'Throw in Liquid Submersable.',
        use: 'In Tanks and Wells',
        thread: '1/8NTP',
        image: '../assets/images/ps30a100.jpg'
      }, {
        id: '50-PSI-Absolute',
        title: 'PS50A Sensor with 150Ft cable.',
        depth: '80 Feet',
        location: 'Throw in Liquid Submersable.',
        use: 'In Tanks and Wells',
        thread: '1/8NTP',
        image: '../assets/images/ps30a100.jpg'
      }, {
        id: 'connector_8_inch',
        title: 'Controller Connector to sensor',
        image: '../assets/images/cable_8_inch.jpg'
      }, {
        id: 'poe48v',
        title: 'POE48V',
        image: '../assets/images/poe48v.jpg'
      }, {
        id: 'poe_cable',
        title: 'POE Ethernet cable',
        image: '../assets/images/poe_cable.jpg'
      }, {
        id: 'tubing25',
        title: '1/4" Pollyurethan 100 feet',
        image: '../assets/images/tubing25.jpg'
      }, {
        id: 'connector18',
        title: 'Sensor to Tubing 1/8 NTP Connector',
        thread: '1/8 NTP',
        image: '../assets/images/connector18.jpg'
      }];
    }

  });
});
define('water-tracker/routes/solutions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        id: 'WaterTracker2',
        title: 'Using Well, Cistern tank & Oil Tank sensors',
        sensors: '3 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/solution3.jpg'

      }];
    }

  });
});
define('water-tracker/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
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
define("water-tracker/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LLpD2ROL", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Welcome!\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    To where water is really measured.\\n  \"],[8],[0,\"\\n \"],[8],[0,\"\\n \\n \"],[6,\"div\"],[7],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"About WaterTracker\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n  The WaterTracker site was designed to manage well water and cistern tanks, to provide\\nvital water level information to owners of wells and cistern tanks. It is also very \\nimportant to know the recovery rate of water going back into your well so you can change\\nhow you consume your water in times of low rainfall. Watertracker can be used to alert\\nyou via email or text messages that your water level is low and can also be setup to\\nAutomatically order water delivery for you. Watertracker is also able to monitor other\\nliquid’s such as gas, diesel and other liquid’s.\\n\"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\nWaterTracker can give you historical information on your well or cistern tanks in a nice\\ngraphical chart so you can easily see how the water table in your area changes throughout\\nthe year or even year to year. Or you can see how fluid levels in your tanks are consumed\\nthrough selectable time periods. This information can be looked at from anywhere you may \\nbe throughout the world by just logging into your online account via your computer or\\nsmart device such as cell phones or tablets.\\n\"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\nOptional displays can be mounted on a wall in your home or office so that family members \\ncan easily see water levels and how it is impacted by just simply washing your car or \\nwatering the flowers in your garden or doing your laundry. Information of how your well \\nbehaves creates a huge awareness in people who use it, which quickly changes their habits\\non how they use water. This can also pertain to other fluid levels as well not just water.\\n\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "water-tracker/templates/about.hbs" } });
});
define("water-tracker/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "m6kKkZmn", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"      \"],[6,\"h1\"],[7],[0,\"\\n        \"],[6,\"em\"],[7],[0,\"WaterTracker\"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"div\"],[9,\"class\",\"links\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"home\"],null,{\"statements\":[[0,\"        Home\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"products\"],null,{\"statements\":[[0,\"        Products\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"solutions\"],null,{\"statements\":[[0,\"        Solutions\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"about\"],null,{\"statements\":[[0,\"        About\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"contact\"],null,{\"statements\":[[0,\"        Contact\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "water-tracker/templates/application.hbs" } });
});
define("water-tracker/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rtT4sABI", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Contact Us\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"For help on products and general questions.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[7],[0,\"\\n        \"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    WaterTracker HQ\\n    \"],[6,\"address\"],[7],[0,\"\\n      195 Sunnyridge Rd.\"],[6,\"br\"],[7],[8],[0,\"\\n      Jerrseyville, ON\"],[6,\"br\"],[7],[8],[0,\"\\n      L0R 1R0\"],[6,\"br\"],[7],[8],[0,\"\\n         \\n    \"],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"tel:503.555.1212\"],[7],[0,\"+1 (503) 555-1212\"],[8],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"mailto:watertracker@mtex.ca\"],[7],[0,\"watertracker@mtex.ca\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "water-tracker/templates/contact.hbs" } });
});
define("water-tracker/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6cD1iBVZ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Welcome!\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    To where water is really measured.\\n  \"],[8],[0,\"\\n \"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"home\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"\\n        Test\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "water-tracker/templates/home.hbs" } });
});
define("water-tracker/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Yb9YKI2Y", "block": "{\"symbols\":[],\"statements\":[[0,\"import Route from '@ember/routing/route';\\n\\nexport default Route.extend({\\n  beforeModel() {\\n    this.replaceWith('home');\\n  }\\n});\"]],\"hasEval\":false}", "meta": { "moduleName": "water-tracker/templates/index.hbs" } });
});
define("water-tracker/templates/products", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5w2KPTiV", "block": "{\"symbols\":[\"product\"],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Welcome!\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    Select the correct sensor for your application.\\n  \"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"   \"],[6,\"article\"],[9,\"class\",\"product\"],[7],[0,\"\\n      \"],[6,\"img\"],[10,\"src\",[26,[[19,1,[\"image\"]]]]],[9,\"class\",\"sensor-pic\"],[7],[8],[0,\"  \\n    \"],[6,\"h3\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Product:\"],[8],[0,\" \"],[1,[19,1,[\"title\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Use:\"],[8],[0,\" \"],[1,[19,1,[\"use\"]],false],[0,\"\\n    \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Thread:\"],[8],[0,\" \"],[1,[19,1,[\"thread\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Location:\"],[8],[0,\" \"],[1,[19,1,[\"location\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Depth:\"],[8],[0,\" \"],[1,[19,1,[\"depth\"]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "water-tracker/templates/products.hbs" } });
});
define("water-tracker/templates/solutions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oigDlGcM", "block": "{\"symbols\":[\"product\"],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Welcome!\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    Select the correct sensor for your application.\\n  \"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"   \"],[6,\"article\"],[9,\"class\",\"product\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Product:\"],[8],[0,\" \"],[1,[19,1,[\"title\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Sensors\"],[8],[0,\" \"],[1,[19,1,[\"sensors\"]],false],[0,\"\\n    \"],[8],[0,\"  \\n  \"],[8],[0,\" \\n\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[6,\"div\"],[7],[0,\"\\n              \"],[6,\"img\"],[9,\"src\",\"../assets/images/solution3.jpg\"],[9,\"width\",\"50%\"],[9,\"heigth\",\"50%\"],[7],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "water-tracker/templates/solutions.hbs" } });
});

define('water-tracker/config/environment', [], function() {
  var prefix = 'water-tracker';
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
  require("water-tracker/app")["default"].create({"name":"water-tracker","version":"0.0.0+ae4dcec5"});
}
//# sourceMappingURL=water-tracker.map
