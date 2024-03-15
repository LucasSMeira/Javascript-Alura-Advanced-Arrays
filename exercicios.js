const array = [2,44,21,67,45,3,1,4,5,30];
const arrayDois = [78,22,23,24,25];
const arrayTres = [31,32,33,34,35];

const juntarArrays =(array, arrayDois, arrayTres) => {
    const novoArray = [...array, ...arrayDois, ...arrayTres];
    return novoArray;
}

console.log(juntarArrays(array, arrayDois, arrayTres));
console.log("\r\n");

const valores = [10,20,30,50];

const somaArray =  valores.reduce((somador, valorAtual) => somador + valorAtual, 0);

console.log(somaArray);
console.log("\r\n");

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const novoArrayCores = [...new Set(coresLista1.concat(coresLista2))];

console.log(novoArrayCores);
console.log("\r\n");

const arrayDePares = array.filter((num) => num%2 === 0);
console.log(arrayDePares);
console.log("\r\n");

const arrayFiltrado = array.filter((num) => num%3 === 0 && num > 5);
console.log(arrayFiltrado);
console.log("\r\n");

const somaDeArray = (array) => {
    let somador = 0;
    array.forEach(element => {
        somador += element;
    });
    return somador;
}

console.log(somaDeArray(valores));
console.log("\r\n");
