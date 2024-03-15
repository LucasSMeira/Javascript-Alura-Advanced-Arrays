const array = [2,44,21,67,45];
const arrayDois = [78,22,23,24,25];
const arrayTres = [31,32,33,34,35];

const juntarArrays =(array, arrayDois, arrayTres) => {
    const novoArray = [...array, ...arrayDois, ...arrayTres];
    return novoArray;
}

console.log(juntarArrays(array, arrayDois, arrayTres));

const valores = [10,20,30,50];

const somaArray =  valores.reduce((somador,valorAtual) => somador + valorAtual, 0);

console.log(somaArray);