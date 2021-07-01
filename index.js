const { program } = require("commander");
const { guardarSaludo } = require("./utilidades/archivos");
program.option("-n, --nombre <nombre>", "Tu nombre");
program.parse(process.argv);
const chalk = require("chalk");

const options = program.opts();

if (options.nombre) {
  guardarSaludo(options.nombre);
} else {
  console.log(
    chalk.yellow("Introduce un nombre por favor ('node --nomre=tuNombre')")
  );
}
