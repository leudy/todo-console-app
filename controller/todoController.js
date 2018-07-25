const fs = require("fs");
let list = [];

const Add = description => {
    let task = {
        description,
        completed: false
    };
    LoadData();
    list.push(task);
    SaveData();
    console.log(list);
    return task;
};

let getListado = () => {
    //load list to memory
    LoadData();
    //return all task
    return list;
};

const actualizar = (description, completado = true) => {
    //load list to memory
    LoadData();
    //fin element by criteria
    let index = list.findIndex(task => task.description === description);
    if (index >= 0) {
        list[index].completed = completado;
        SaveData();
        return true;
    } else {
        return false;
    }
}


const Deleted = (desc) => {
    //load list to memory
    LoadData();
    //remove all task diferent to criteria
    let nuevoListado = list.filter(task => task.description !== desc);
    if (nuevoListado.length === list.length) {
        return false;
    } else {
        list = nuevoListado;
        //save changes
        SaveData();
        return true;
    }

    if (index >= 0) {
        list.splice(index);
        SaveData();
        return true;
    } else {
        return false;
    }

}

const SaveData = () => {
    let data = JSON.stringify(list);
    fs.writeFile('DB/data.json', data, (error) => {
        if (error) throw new Error('No se pudo guardar el listado', error)

    });
}

let LoadData = () => {
    try {
        list = require('../DB/data.json');
    } catch (error) {
        list = [];

    }


}



module.exports = { Add, getListado, actualizar, Deleted };