const express = require("express");
const { readJokesFromFile, writeJokesToFile } = require("../utils/function");

const router = express.Router();

router.get("/api/jokes/:id", (req, res) => {
  const { id } = req.params;
  const jokes = readJokesFromFile();
  const jokeIndex = jokes.findIndex((joke) => joke.id === parseInt(id));
  if (jokeIndex === -1) {
    return res.json({
      content: "That's all the jokes for today! Come back another day!",
    });
  }
  res.json(jokes[jokeIndex]);
});

router.post("/api/jokes/:id/vote", (req, res) => {
  const { id } = req.params;
  const { vote } = req.body;
  if (vote !== "like" && vote !== "dislike") {
    return res.status(400).json({ message: "Invalid vote" });
  }
  const jokes = readJokesFromFile();
  const jokeIndex = jokes.findIndex((joke) => joke.id === parseInt(id));
  jokes[jokeIndex][vote + ""]++;
  if (jokeIndex >= 3) {
    return res.json({ content: "That's all the jokes for today! Come back another day!" });
  }
  writeJokesToFile('const jokes = ' + JSON.stringify(jokes) + '\n\nmodule.exports = jokes');
  res.cookie("current", Number(id)+1, { maxAge: 24 * 60 * 60 * 1000, httpOnly: false, secure: false, overwrite: true }); // Cookie expires in 1 day
  res.json(jokes[jokeIndex+1]);
});

module.exports = router;
