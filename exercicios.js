const array = [2,44,21,67,45,3,1,4,5,30];
const arrayDois = [78,22,23,24,25];
const arrayTres = [31,32,33,34,35];

const juntarArrays =(array, arrayDois, arrayTres) => {
    const novoArray = [...array, ...arrayDois, ...arrayTres];
    return novoArray;
}

console.log("\r\n Exercicio 1 ");
console.log(juntarArrays(array, arrayDois, arrayTres));

const valores = [10,20,30,50];

const somaArray =  valores.reduce((somador, valorAtual) => somador + valorAtual, 0);

console.log("\r\n Exercicio 2");
console.log(somaArray);

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const novoArrayCores = [...new Set(coresLista1.concat(coresLista2))];

console.log("\r\n Exercicio 3");
console.log(novoArrayCores);

const arrayDePares = array.filter((num) => num%2 === 0);
console.log("\r\n Exercicio 4");
console.log(arrayDePares);

const arrayFiltrado = array.filter((num) => num%3 === 0 && num > 5);
console.log("\r\n Exercicio 5");
console.log(arrayFiltrado);

const somaDeArray = (array) => {
    let somador = 0;
    array.forEach(element => {
        somador += element;
    });
    return somador;
}

console.log("\r\n Exercicio 6");
console.log(somaDeArray(valores));
