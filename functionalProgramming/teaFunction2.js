const prepareGreenTea = () => 'green Tea';
const prepareBlackTea = () => 'black Tea';

const getTea = (numOfCups, prepareTea) => {
    const teaCups = [];

    for(let cup=0;cup<numOfCups;cup++){
        //lembrar de criar a constante de chicara de cha e passar a funcao
        const teacup = prepareTea();
        teaCups.push(teacup);
    }

    return teaCups;
};

const tea4GreenTeamFCC = getTea(25,prepareGreenTea)
const tea4BlackTeamFCC = getTea(17,prepareBlackTea)

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC)

