const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  const authHeader = req.headers.authorization?.split(" ");
  if (authHeader[1]) {
  }
  try {
    const data = toData(authHeader[1]);
    console.log("Sucess?", data);
  } catch (e) {
    res.status(401).send("Token Invalid, can't log in");
  }
}

module.exports = auth;
