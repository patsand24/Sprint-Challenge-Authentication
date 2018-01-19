const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username, password } = req.body;
  // User.create({ username, password })
  //   .then((newUser) => {
  //     res.status(200).json(newUser);
  //   })
  //   .catch((error) => {
  //     res.status.json(error);
  //   });
  const user = new User({ username, password });
  user.save((error, newUser) => {
    if (error) {
      res.status(422).json(error);
    }
    res.status(200).json(newUser);
  });
};

module.exports = {
  createUser
};
