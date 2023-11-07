//alert('Olá, bem-vindos')


function verificar(){
        //alert('confirmado, tu é hetero top')

        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        var img = document.createElement('img') //criar dinamicamente no js
        img.setAttribute('id', 'foto') //vou deixar pra set algumas coisas pelo js

        
        if(fano.value.length == 0 || fano.value > ano) { // significa que se  o comprimento de fano for 0, nao ter entrada, 
            alert('[ERRO] Verifique os dados e tente novamente!')

        } else {
            var fsex = document.getElementsByName ('radsex') //radio é as bolotas de seleçao. precisa ter o mesmo nome pois do contrario nao terá como escolher apenas uma opção
            var idade = ano - Number(fano.value)
            //res.innerHTML =`Idade calculada é: ${idade}`
            var genero =''

            if (fsex[0].checked){ //[0] significa que a posiçao 0 foi selecionada (checked)
                genero = 'Homem'
                if (idade >=0 && idade < 10){ //aqui ele verifica idade e set a imagem de acordo
                    //criança
                    img.setAttribute('src', 'bebemasc.webp') //img é atribuido o src (source/fonte) e o nome do arquivo que precisa estar na mesma pasta
                    
                } else if (idade <22){
                    //jovem
                    img.setAttribute('src','jovemmasc.webp')


                } else if(idade < 50){
                    //adulto
                    img.setAttribute('src','adultomasc.webp')



                } else {
                    //idoso
                    img.setAttribute('src','idosomasc.webp')


                }




            } else if (fsex[1].checked){
                genero = 'Feminino'

                if (idade >=0 && idade <18){
                    //criança
                    img.setAttribute('src','bebefemi.webp')

                } else if(idade<22) {
                    //jovem
                    img.setAttribute('src','jovemfami.webp')
                } else if (idade <50){
                    //adulto
                    img.setAttribute('src','adultofemi.webp')

                } else {
                    //idoso
                    img.setAttribute('src','idosofemi.webp')
                }

            }



            
            res.style.textAlign = 'center'
            res.innerHTML =`Detectamos ${genero} com ${idade}`
            res.appendChild(img) // aqui é onde colocamos pra apareecer o elemento img
            

        





        }







}


