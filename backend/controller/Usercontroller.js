const UserSchema = require("../Model/UserSchema");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const signup = async (req, res) => {
  

  let User = await UserSchema.findOne({ email: req.body.email });

  if (User) return res.status(400).json({ message: "User Already Exist" });

  User = new UserSchema(req.body);
  const Token = await User.generateJWT();

  User.password = await bcrypt.hash(req.body.password, 10);
  try {
    await User.save();
    return res.status(201).send({
      message: "User Registration Successfull",
      Token: Token,
      User: _.pick(User, ["uname", "email"]),
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const signin = async (req, res) => {
  const AuthUser = await UserSchema.findOne({ email: req.body.email });
  if (!AuthUser) return res.status(400).send("User Not Exist");

  const PassComp = await bcrypt.compare(req.body.password, AuthUser.password);
  if (!PassComp) return res.status(400).send("Email OR Password Wrong..");
  const Token = await AuthUser.generateJWT();
  try {
    res.status(200).send({
      message: "Login Successfull",
      Token: Token,
      User: _.pick(AuthUser, ["_id", "uname", "email", "role"]),
    });
  } catch (err) {
    return res.status(400).send("Invalid information");
  }
};

module.exports = { signin, signup };
