"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get('/', function (req, res) {
  res.send('respond with a resource');
});
router.post('/', function (req, res) {
  res.send('Create User');
});
router.put('/', function (req, res) {
  res.send('Update User');
});
var _default = router;
exports["default"] = _default;