const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const router = new Router();

const bcrypt = require("bcrypt");
const AuthMiddleware = require("../auth/middleware");

router.post("/login", AuthMiddleware, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(400)
        .send({ message: "Please supply a valid email and password" });
    } else {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(401).send("Incorrect parameters");
      }
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch) {
        const token = toJWT({ userId: user.id });

        return res.send({ message: "Congrats you are logged in", token });
      } else {
        return res.status(401).send("Incorrect data");
      }
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
