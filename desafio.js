//01. Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

let numero = prompt('Dos números de 0 a 5. Em qual estou pensando?')

if (numero ==4){
   console.log('Você acertou. Parabens!!')
    alert('Você acertou. Parabens!!')

}else{
    console.log('Você errou. Que pena :(')
    alert('Você errou. Que pena :(')

}

//02.Escreva um programa que pergunte a velocidade do carro de um usuário. Caso ultrapasse 80km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5 por Km acima de 80Km/h.

let vel = prompt('coloque a velocidade do carro')
if (vel > 80){
    let multa = (vel - 80)*5;
    alert('Você ultrapassou 80km/h, sua multa é de R$ 5,00');
    

}else{
    alert('Você ultrapassou 80km/h, sua multa é de R$ 5,00');
}

//03. Crie um programa que leia um número inteiro e mostre na tela se é PAR ou íMPAR.

let numero = prompt('digite um numero')
let total = numero%2  
if (total == 0){
    alert ('par')

} else{
    alert('impar')
}
 alert (total)





// 04 Escreva um programa que pergunte o salário do funcionário e calcule o valor do aumento. Para salários superiores a R$ 1250,00 calcule um aumento de 10%. Para os inferiores ou iguais, de 15%.


let salario = prompt(parseInt('Qual é o valor do seu salário?'))

if (salario > 1250){
    let aumento = (salario * 10/100)+ salario;
   alert(aumento)
} else{
    let aumento2 = ( salario * 15/100) + salario;
    alert (aumento2);

}