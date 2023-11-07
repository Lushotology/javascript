let amigo = {nome:'José',  // objeto let amigo = {nome:'', sexo:'', peso: '', engordar (){}}

sexo: 'M',
peso: 84, // nao vai ''
engordar(p=0){
    console.log('Engordou')
    this.peso += p

}}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

