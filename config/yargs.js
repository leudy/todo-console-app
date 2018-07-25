const description = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarae por hacer"
}
const completado = {
    default: true,
    alias: "c",
    desc: "Marca como compltado o pendiente la terea"
}

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        description
    })
    .command("actualizar", "Actuliza el estado completo de la tarea", {
        description,
        completado
    }).command("borrar", "Elimina un elemento por hacer", {
        description
    })
    .help().argv;

module.exports = { argv };