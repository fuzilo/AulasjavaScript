
//Condição Simples

var vel = 70.4
var limite = 60
console.log(`A velocidade do seu Carro é de ${vel} km/h`)
if (vel > limite){
    console.log(`Você ultrapassou a velocidade Permitida e foi Multado!`)
}
console.log(`Dirija com cuidado`)

//Condições Compostas
var país = "EUA"
console.log(`País de Origem de usuário: ${país}`)
if(país != "Brasil"){
    console.log(`O usuário é estrangeiro`)
} else{
    console.log(`O usuário é Brasileiro`)
}

//Condições aninhadas
var horaSistem = new Date()
console.log(horaSistem)

//

var hora = horaSistem.getHours()
var minutos = horaSistem.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos`)


if (hora>=0 && hora <= 4){
    console.log(`Agora são ${hora}:${minutos}. Boa Madrugada.`)
} else if (hora <= 12 && hora >4) {
    console.log(`Agora são ${hora}:${minutos}. Bom dia`)
} else if(hora >12 && hora <=18){
    console.log(`Agora são ${hora}:${minutos}. Boa tarde`)
}else
{
    console.log(`Agora são ${hora}:${minutos}. Boa noite`)
}
