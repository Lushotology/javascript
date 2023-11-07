let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
/*
console.log (valores[1])


for (let pos = 0; pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)




}

valores.sort()


for (pos = 0; pos < valores.length;pos++){
    console.log(`Agora em ordem crescente ${pos} tem o valor ${valores[pos]}`)




}
*/
valores.sort()
console.log(valores)

for (let pos in valores){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)



}




