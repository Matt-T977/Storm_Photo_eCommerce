"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("firebase-admin/app");

var _firestore = require("firebase-admin/firestore");

var _config = _interopRequireDefault(require("../config"));

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _serviceAccountKey = _interopRequireDefault(require("../serviceAccountKey.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Firebase Initialize
// const firebaseApp = initializeApp(config.firebaseConfig);
var firebaseApp = _firebaseAdmin["default"].initializeApp({
  credential: _firebaseAdmin["default"].credential.cert(_serviceAccountKey["default"])
});

var db = (0, _firestore.getFirestore)();
var _default = db;
exports["default"] = _default;