"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import User from '../models/User'

// index, show, store, update, destroy



class UserController {
   async store (req, res) {
    return res.json({ message: 'Hello World' })
  }
}

exports. default = new UserController()
