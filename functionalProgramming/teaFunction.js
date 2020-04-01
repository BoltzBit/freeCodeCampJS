//constante que recebe o retorno de uma arrow function
const prepareTea = (typeOfTea) => typeOfTea;

//funcão que pega o numero de copos a ser preparado
const getTea = (numOfCups, typeOfTea) => {
    const teaCups = [];

    for(let cups=0;cups<=numOfCups;cups++){
        let teaCup = prepareTea(typeOfTea);

        teaCups.push(teaCup);
    }

    return teaCups;
};

const tea4TeamFCC = getTea(40, 'green tea');

console.log(tea4TeamFCC);
