"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebaseAdmin = require("firebase-admin");

var _db = _interopRequireDefault(require("../db"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Post Request
var addUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var data, docRef;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = req.body;
            _context.next = 4;
            return _db["default"].collection('users').add(data);

          case 4:
            docRef = _context.sent;
            res.status(200).send('User successfully created with profile: ' + docRef);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(400).send(_context.t0.message);

          case 11:
            next;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function addUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Get All Users Request


var getAllUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var users, data, usersArray;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _db["default"].collection('users');

          case 3:
            users = _context2.sent;
            _context2.next = 6;
            return users.get();

          case 6:
            data = _context2.sent;
            usersArray = [];

            if (data.empty) {
              res.status(404).send('No users found.');
            } else {
              data.forEach(function (doc) {
                var user = new _user["default"](doc.id, doc.data().firstName, doc.data().lastName, doc.data().streetAddress, doc.data().city, doc.data().state, doc.data().zipCode, doc.data().phoneNumber, doc.data().orders);
                usersArray.push(user);
              });
              res.send(usersArray);
            }

            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(400).send(_context2.t0.message);

          case 14:
            next;

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getAllUsers(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var getUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var id, user, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _db["default"].collection('users').doc(id);

          case 4:
            user = _context3.sent;
            _context3.next = 7;
            return user.get();

          case 7:
            data = _context3.sent;

            if (!data.exists) {
              res.status(404).send('This user does not exist.');
            } else {
              res.send(data.data());
            }

            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(400).send(_context3.t0.message);

          case 14:
            next;

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getUser(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, data, user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            data = req.body;
            _context4.next = 5;
            return _db["default"].collection('users').doc(id);

          case 5:
            user = _context4.sent;
            _context4.next = 8;
            return user.update(data);

          case 8:
            res.send('User profile Updated');
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(400).send(_context4.t0.message);

          case 14:
            next;

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function updateUser(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _db["default"].collection('users').doc(id)["delete"]();

          case 4:
            res.send('User has been deleted successfully');
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(400).send(_context5.t0.message);

          case 10:
            next;

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function deleteUser(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = {
  addUser: addUser,
  getAllUsers: getAllUsers,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};
exports["default"] = _default;