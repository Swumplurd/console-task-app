require('colors');

//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB } = require('./helpers/guardarArchivo');

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
    const tareas = new Tareas()

    do {
        opt = await inquirerMenu(); //Imprime el menu

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr)
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');

    console.clear();
};

main();