const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.yellow} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.yellow} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.yellow} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'5.'.yellow} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.yellow} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.yellow} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.yellow} Salir`
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opcion');
    console.log('===========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar...`
        }
    ]
    console.log('')
    await inquirer.prompt(question);
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0) return 'Por favor ingrese un valor...';
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc 
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}