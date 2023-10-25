import express from 'express' // Importando o Express
const app = express() // Iniciando o Express

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')

//Indicando ao express a pasta public para arquivos estáticos

app.use(express.static("public"))

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// ROTA CLIENTES
app.get("/clientes",function(req,res){
    const clientes = [
        {nome: "João Silva", cpf: "111.222.333-00", endereco: "Rua A, 17 - Bairro: Jardim das Flores"},
        {nome: "Maria Pereira", cpf: "222.333.444-00", endereco: "Rua B, 44 - Bairro: Oliveiras"},
        {nome: "Carlos Alberto", cpf: "444.555.666-00", endereco: "Rua C, 68 - Bairro: Perdizes"},
        {nome: "Rodrigo Marinho", cpf: "666.777.888-00", endereco: "Rua D, 103 - Bairro: Avenida Central"}
    ]
    res.render("clientes", {
        clientes: clientes
    })

})

// ROTA PRODUTOS
app.get("/produtos",function(req,res){
    const produtos = [
        {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
        {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos"},
        {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
        {nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"}
    ]
    res.render("produtos", {
        produtos: produtos
    })

})

// ROTA PEDIDOS
app.get("/pedidos",function(req,res){
    const pedidos = [
        {numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })

})

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})