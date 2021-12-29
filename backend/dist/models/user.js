"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(id, firstName, lastName, streetAddress, city, state, zipCode, phoneNumber, orders) {
  _classCallCheck(this, User);

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.streetAddress = streetAddress;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
  this.phoneNumber = phoneNumber;
  this.orders = orders;
};

var _default = User;
exports["default"] = _default;