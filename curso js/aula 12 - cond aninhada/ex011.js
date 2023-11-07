var idade = 69;
console.log(`Você tem ${idade} anos`);

if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade >= 65) {
  //uma maneira pra deixar mais limpo. || significa OU

  console.log("Voto Opcional");
} else {
  console.log("Voto obrigatório"); //como é o final, nao precisa verificar se ele é maior ou igual a  18
}
