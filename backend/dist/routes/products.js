"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // Product List CRUD


router.get('/list', function (req, res) {
  res.send('products list');
});
router.post('/list', function (req, res) {
  res.send('posted new product');
}); // Individual Product CRUD

router.get('/{id}', function (req, res) {
  res.send('Get Individual Product');
});
router.put('/{id}', function (req, res) {
  res.send('Product Update');
});
router["delete"]('/{id}', function (req, res) {
  res.send('delete a product');
});
var _default = router;
exports["default"] = _default;