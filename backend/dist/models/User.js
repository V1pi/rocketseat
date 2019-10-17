"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');
/**
 * @noInheritDoc
 */




/**
 * @ignore
 */
const UserSchema = new (0, _mongoose.Schema)({
  email: String
})

exports. default = _mongoose.model('User', UserSchema)
