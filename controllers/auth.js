const User = require("../models/user")
const {registerValidation} = require("../utils/validation")


exports.register = async (req, res) => {
    const validation = registerValidation(req.body)
    try {
      if (validation["error"]) {
        res.send(validation["error"].details[0].message);
      } else {
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        const savedUser = await user.save();
        res.status(201).send(savedUser);
      }
    } catch (err) {
      res.send(400).send(err);
    }
}