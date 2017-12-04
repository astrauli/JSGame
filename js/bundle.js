/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game_view = __webpack_require__(1);

var _game_view2 = _interopRequireDefault(_game_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('game-canvas');
  var ctx = canvas.getContext('2d');
  var gameView = new _game_view2.default(ctx);
  gameView.start(ctx);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(ctx) {
    _classCallCheck(this, GameView);

    this.game = new _game2.default();
    this.ctx = ctx;
    this.start = this.start.bind(this);
  }

  _createClass(GameView, [{
    key: 'start',
    value: function start() {
      // this.ctx.fillStyle = 'red';
      // this.ctx.beginPath();
      // this.ctx.arc(
      //   0,
      //   0,
      //   120,
      //   2 * Math.PI,
      //   false
      // );
      // this.ctx.fill();
      setInterval(function () {
        // this.game.step();
        // this.game.draw(this.ctx);
      }, 20);
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // TODO: import game components


var _projectile = __webpack_require__(3);

var _projectile2 = _interopRequireDefault(_projectile);

var _util = __webpack_require__(5);

var Util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.projectiles = [];
    // TODO: Implement bullet as powerup
    // this.bullets = [];

    // this.disc = new Disc(params here);
    this.DIM_X = window.innerWidth;
    this.DIM_Y = window.innerHeight;
    this.initProjectiles = this.initProjectiles.bind(this);
    this.initProjectiles();
    this.randomPosition = this.randomPosition.bind(this);
    this.draw = this.draw.bind(this);
    this.moveObjects = this.moveObjects.bind(this);
    this.wrap = this.wrap.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.step = this.step.bind(this);
    this.allObjects = this.allObjects.bind(this);
  }

  _createClass(Game, [{
    key: 'initProjectiles',
    value: function initProjectiles() {
      var _this = this;

      setInterval(function () {
        _this.projectiles.push(new _projectile2.default());
      }, 1000);
    }
  }, {
    key: 'randomPosition',
    value: function randomPosition() {}
  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      this.projectiles.forEach(function (projectile) {
        projectile.draw();
      });
    }
  }, {
    key: 'moveObjects',
    value: function moveObjects() {
      // this.allObjects().forEach(object => {
      //   object.move();
      // });
    }
  }, {
    key: 'wrap',
    value: function wrap() {}
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      //nested loop for checking all objects
    }
  }, {
    key: 'step',
    value: function step() {
      this.moveObjects();
      this.checkCollisions();
    }
  }, {
    key: 'allObjects',
    value: function allObjects() {
      // let all = this.projectiles.slice();
      // all.push(this.disc);
      // TODO: Add other objects
      // all = all.concat()
      // return all;

    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(4);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projectile = function (_MovingObject) {
  _inherits(Projectile, _MovingObject);

  function Projectile(options) {
    _classCallCheck(this, Projectile);

    options.radius = 5;
    return _possibleConstructorReturn(this, (Projectile.__proto__ || Object.getPrototypeOf(Projectile)).call(this, options));
  }

  _createClass(Projectile, [{
    key: 'collideWith',
    value: function collideWith(otherObject) {}
  }]);

  return Projectile;
}(_moving_object2.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
  function MovingObject(options) {
    _classCallCheck(this, MovingObject);

    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    // this.color = random color
    this.game = options.game;
    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.didCollideWith = this.didCollideWith.bind(this);
  }

  _createClass(MovingObject, [{
    key: "draw",
    value: function draw(ctx) {
      // ctx.fillStyle = this.color
      // ctx.beginPath();
      // ctx.arc(
      //   this.pos[0],
      //   this.pos[1],
      //   this.radius,
      //   0,
      //   2 * Math.PI,
      //   false
      // );
      // ctx.fill();
    }
  }, {
    key: "move",
    value: function move() {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[0];
    }
  }, {
    key: "didCollideWith",
    value: function didCollideWith(otherObejct) {
      // let totalRadius = this.radius + otherObejct.radius;
      // if (distance formula <= totalRadius){
      // return true;
      // } else {
      // return false;
      // }
    }
  }]);

  return MovingObject;
}();

module.exports = MovingObject;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLOR = ['red', 'blue', 'green'];

var randomColor = exports.randomColor = function randomColor() {
  return COLOR[Math.floor(Math.random() * COLOR.length)];
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map