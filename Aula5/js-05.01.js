//while

console.log(`Repetição com While`)
var n1 = 4
var n2 = 12
var passo = 1

while(n1<=n2 ){
    console.log(`Contando:${n1}`)
    n1+=passo
}

do {
    console.log(`${n1}`)
    n1+=passo
} while (n1<=n2);

//FOR

console.log(`Repetição com For`)
for (var cont = n1; cont<=n2; cont+= passo ){
    console.log(`Contando: ${cont}`)
}
console.log("asdaoishdFim")