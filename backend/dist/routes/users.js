"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/*Primary*/


router.get('/list', _userController["default"].getAllUsers);
router.get('/:id', _userController["default"].getUser);
router.post('/new', _userController["default"].addUser);
router.put('/:id', _userController["default"].updateUser);
router["delete"]('/:id', _userController["default"].deleteUser);
var _default = router;
exports["default"] = _default;