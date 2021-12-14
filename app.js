require('colors');

//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquirerMenu} = require('./helpers/inquirer');

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
    console.log('Hola mundo!');

    let opt = '';
    do {
        opt = await inquirerMenu();
    } while (opt !== '0');

    //pausa();
};

main();