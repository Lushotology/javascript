//alert('Olá, bem-vindos')

function carregar() {

    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()

    var hora = data.getHours()
    //var hora = 8


    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12){
        //bom dia
        imagem.src='fotomanha.webp'
        document.body.style.background = '#cfa382'


    } else if (hora >=12 && hora <18){
        //boa tarde
        imagem.src ='fototarde.webp'
        document.body.style.background = '#a66254'

    } else {
        //boa noite
        imagem.src ='fotonoite.webp'
        document.body.style.background='#4f3e61'

        
        
    }


}







