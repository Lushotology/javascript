//alert('Olá, bem-vindos')

function contar(){
        
        
        let ini = document.getElementById('txti') // o chat gpt sugeriu usar CONST ao inves de let, mas nao funcionaria nesse caso
        let fim = document.getElementById('txtf')
        let passo = document.querySelector('#txtp')// elemento com id "txtp" é um elemento <input> de texto, o código funcionaria melhor sem o seletor div

        //let passo = document.getElementById('txtp') //a variavel passo receber do que inserido no txtp feito em html, que é neste caso o passo
        //let res = document.getElementById('res')      


    
        
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        
        res.innerHTML = 'Erro: Preencha todos os campos.'
        //alert('[ERRO]')
    } else {
        //alert('Tudo Ok')
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value) //A função Number() é usada para converter os valores dos campos de entrada em números, o que é uma etapa importante para que a contagem funcione corretamente.
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido. Considerando Passo 1')
            p = 1
        }


        if (i < f ){
            for (let c = i; c <= f; c += p) { //contagem crescente
            //i.e. a variavel c vai receber i(inicio), dai enquanto c for menor que f (fim) c vai somar p (passo)
            res.innerHTML += `${c} \u{1F976}	`    // pra adicionar o emoji, tirar o U+ de U+1F976 e codar--> \u{1F976}
        }

            
        } else {
            for (let c = i;c >= f; c -= p) //contagem regressiva
            res.innerHTML += `${c} \u{1F976}`
        }
        

        res.innerHTML += `\u{1F3C1}`


    }



}


