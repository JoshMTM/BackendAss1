const express = require("express");
const app = express();
const jsonParser = express.json();
const PORT = 4000;
const Teams = require("./models/team");
const Players = require("./models/player");
const { Op } = require("sequelize");
const authRouter = require("./router/auth");
const authMiddleware = require("./auth/middleware");

app.use(jsonParser);
app.use(authRouter);

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
  const { name, age, teamId } = req.body;
  if (!name || !age || name === " " || age === " ") {
    res.status(400).send("missing parameters");
  } else {
    const player = await Players.create({
      name,
      age,
      teamId,
    });
    res.send(player);
    next(e);
  }
});

app.get("/teams/:id/players", async (req, res, next) => {
  try {
    const teamId = req.params.id;
    const team = await Teams.findByPk(teamId);
    if (!team) {
      res.status(404).send("Non-existing team");
    } else {
      const players = await Players.findAll(req.body);
      res.send(team, { include: players });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.put("/teams/:id", async (req, res, next) => {
  try {
    const teamId = parseInt(req.params.id);
    const team = await Teams.findByPk(teamId);
    if (!team) {
      res.status(404).send("Team not found");
    } else {
      const teamUpdated = await team.update(req.body);
      res.send(teamUpdated);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Get Players by age

app.get("/payers/:age/", async (req, res, next) => {
  try {
    const age = parseInt(req.params.age);
    const player = await Players.findAll({ where: { age: { [Op.gte]: age } } });
    res.send(player);
  } catch (e) {
    next(e);
  }
});

// delete a specific player by id

app.delete("/players/:id", async (req, res, next) => {
  try {
    const playerId = parseInt(req.params.id);
    const player = await Player.findByPk(playerId);
    if (!player) {
      return res.status(404).send({ message: "Player not found" });
    }
    player.destroy();
    res.status(204).send();
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
