let num = [5, 2, 9, 3]


console.log(`Nosso vetor é ${num}`)
console.log(num)

/*
num [4] = 6 // a posição 4 recebe 6


console.log(nu
num.push(7) // outra forma de adicionar um elemento em um array


console.log(num)


num.length // length é um atributo para mostrar quantos elementos tem um array;

console.log(`O vetor tem ${num.length} posições`) // aqui é a forma de mostrar via console;

console.log ( `O primeiro valor do vetor é ${num[0]}`) // mostra o valor da posição pedida

num.push() // deixa em ordem crscesente;


console.log(`Agora em ordem crescente ${num}`)

*/

let pos = num.indexOf(8) // variavel.indexOf (aqui coloca o valor)-> este vai mostrar em qual  posição está o valor 8

if (pos == -1) { //quando não é encontrado, ele vai dar -1 como resposta, dai então é feito uma conversão usando if - else
    console.log (`A posição não foi encontrada`)


} else {
    console.log(`o valor 5 está na posição ${pos}`)


}

 pos = num.indexOf(9) // nao declarei a variavel, eu só atribui o valor a ela dessa vez.

if (pos == -1) {
    console.log (`[ERRP]`)

} else {
    console.log (`A posição de 9 é ${pos}`)



}













/* num.sort() deixa em ordem crescente */

// console.log (`Em ordem crescente fica ${num.sort}`)













