const colors = require('colors');
const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }
    
    constructor() {
        this._listado = {};
    }

    cargarTareasArr(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log('')
        this.listadoArr.map(({desc, completadoEn}, i) => {
            console.log(
                `${colors.green(i + 1)}. ${desc} :: ${(completadoEn) ? 'Completado'.green : 'Pendiente'.red}`
            );
        })
    }
}

module.exports = Tareas;