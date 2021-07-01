const chalk = require("chalk");
const fs = require("fs");
const guardarSaludo = (nombre) => {
  fs.writeFile(
    "textos/saludo.txt",
    `Hola, ${nombre}. Encantado de saludarte.`,
    (err) => {
      if (err) {
        console.log(chalk.bold.blue("Ha petado"));
        process.exit(1);
      }
    }
  );
};

module.exports = {
  guardarSaludo,
};
