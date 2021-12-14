const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5']
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opcion');
    console.log('===========================\n'.green);

    const opt = await inquirer.prompt(preguntas);

    return opt;
}

module.exports = {
    inquirerMenu
}