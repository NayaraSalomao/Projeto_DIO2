//Resolução do desafio DIO Calculadora Ranqueada



//Após o usuário acessar o jogo
console.log ("Insira seus dados de usuáio e senha abaixo: ")
 nameCompleto("Nayara"," Salomão")
//Após o usuário logar 
//Rodar função para localizar o usuário no banco de dados

function nameCompleto(firstName, lasteName){
	return name = firstName 
}

//Exibir mensagem de saudação
console.log ("Olá" + " " + (name) + ", seja bem-vindo de volta!")
console.log ("Jogue uma batalha para subir no ranking!")

//Após a partida
//Rodar variável contador para verificar a quantidade de vitórias e derrotas do usuário


//Utilizar os resultados de vitórias e derrotas para rodar a função de quantidade de vitórias

function subtrair(numeroVitoria, numeroDerrota) {
  return numeroVitoria - numeroDerrota;
}

let totalDeVitorias = subtrair(1000, 10);
	
console.log ( "O Herói tem de saldo de:"+ totalDeVitorias + " " + "Vitórias")

//Validar o nível do herói conforme padrão pré estabelecido
if(totalDeVitorias <=10){
console.log("Está no nível de: Ferro")
}else if(totalDeVitorias >= 11 && totalDeVitorias <= 20){
console.log("Está no nível de: Bronze")}
else if(totalDeVitorias >= 21 && totalDeVitorias <= 50){
console.log("Está no nível de: Prata")
}else if(totalDeVitorias >= 51 && totalDeVitorias <= 80){
console.log("Está no nível de:  Ouro")
}else if(totalDeVitorias >= 81 && totalDeVitorias <= 90){
console.log("Está no nível de:  Diamante")
}else if(totalDeVitorias >= 91 && totalDeVitorias <= 100){
console.log("Está no nível de:  Lendário")
}else if(totalDeVitorias >= 101){console.log("Está no nível de:  Imortal")}
else{
console.log("Sinto muito, parece que estamos com problemas. Tente novamente mais tarde.")
}