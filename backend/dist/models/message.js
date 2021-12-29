"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(id, sender, reciever, messageBody) {
  _classCallCheck(this, Message);

  this.id = id;
  this.sender = sender;
  this.reciever = reciever;
};