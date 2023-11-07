let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if (Number(n)>=1 && Number(n) <=100){
        return true 
    } else {
        return false
    }
}

function inLista(n,l){ //recebe dois parametros NUMERO/LISTA
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        //alert('ok')
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado `
        lista.appendChild(item) //isso tem que ser inserido pro item funcionar
        res.innerHTML = ''

    } else {
        alert('Número inválido ou já listado.')
    }
    num.value = ''// serve pra apagar o valor que foi inserido dentro do input de number
    num.focus() // focus FOCA o curso detro de NUM onde é inserido

}

function finalizar() {
    if (valores.length == 0){
        alert('ERRO. Adiciones valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        //let media

        for (let pos in valores) { //analisa um por um 
            soma += valores[pos]
            if (valores[pos] > maior){ //array de percusso
            maior = valores[pos]

            if (valores[pos]< menor) {
                menor = valores[pos]
            }
        
            }
        }
        let media 
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos  ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }


}




