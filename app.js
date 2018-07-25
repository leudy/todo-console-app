const argv = require("./config/yargs").argv;
const colors = require('colors');
const todoController = require("./controller/todoController");
let commando = argv._[0];
switch (commando) {
    case "crear":
        let tarea = todoController.Add(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = todoController.getListado();
        for (task of listado) {
            console.log('================ !Todo! ================='.green);
            console.log('Nombre: ', task.description);
            console.log('Estado: ', task.completed)
            console.log("================= End Todo ================".green);

        }
        //console.log("listar tarea");
        break;
    case "actualizar":
        let desc = argv.descripcion;
        let updated = todoController.actualizar(desc, argv.completado);
        console.log("actualizar tarea");
        break;
    case 'borrar':
        let deleted = todoController.Deleted(argv.descripcion);
        if (deleted) {
            console.log('Eliminado correctamente');
        }
        break;
    default:
        console.log("comamndo no reconocido");
}