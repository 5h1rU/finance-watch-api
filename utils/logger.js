const fs = require("fs");
const util = require("util");
const logFile = fs.createWriteStream(`${__dirname}/debug.log`, { flags: "w" });

module.exports = function logger({ path, status }) {
  const date = new Date();
  const f = date
    .toString()
    .split(" ")
    .slice(1, -3)
    .join(" ");
  logFile.write(util.format(`${f} PATH: ${path} STATUS: ${status} \n`));
};
