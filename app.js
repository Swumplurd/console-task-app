require('colors');

//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquirerMenu, pausa} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

/* const main = async() => {
    console.log('Hola mundo!');

    let opt = '';
    do {
        opt = await mostrarMenu();

        if (opt !== '0') await pausa();
    } while (opt !== '0');

    //pausa();
}; */

const main = async() => {
    let opt = '';

    do {
        //opt = await inquirerMenu();
        const tareas = new Tareas()
        const tarea = new Tarea('Comprar leshe xd');

        tareas._listado[tarea.id] = tarea;

        console.log(tareas)

        await pausa();
    } while (opt !== '0');

    console.clear();
};

main();