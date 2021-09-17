const express = require("express");
const app = express();
const jsonParser = express.json();
const PORT = 4000;
const Teams = require("./models/team");
const Players = require("./models/player");

app.use(jsonParser);

// GET all teams `localhost:4000/teams`
app.get("/teams", async (req, res, next) => {
  try {
    const allTeams = await Teams.findAll(req.body);
    if (!allTeams) {
      res.status(404).send("No teams available");
    } else {
      res.json(allTeams);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Create a new player
app.post("/players", async (req, res, next) => {
  try {
    const player = await Players.create(req.body);
    res.send(player);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// const imageRouter = require("./routers/image");
// const userRouter = require("./routers/user");

// const authRouter = require("./routers/auth");

// app.use("/users", userRouter);
// app.use("/image", imageRouter);
// app.use(authRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
