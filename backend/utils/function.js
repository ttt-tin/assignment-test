const fs = require("fs");
const path = require("path");
const jokes = require("./jokes");
const jokesFilePath = path.join(__dirname, "jokes.js");

const readJokesFromFile = () => {
  return jokes;
};

const writeJokesToFile = (jokes) => {
  try {
    fs.writeFileSync(jokesFilePath, jokes);
  } catch (error) {
    console.error("Error writing jokes file:", error);
  }
};

module.exports = { readJokesFromFile, writeJokesToFile };
