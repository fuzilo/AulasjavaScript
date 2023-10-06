const express = require("express") //importando o express
const app = express() 

app.set("view engine", "ejs")
// Abir consle, e ir até a página do projeto
// npm install ejs --save

// app.get("/", function(req,res){
//     res.send("<h1>Bem Vindo ao meu Site</h1>")
// })

app.get("/", function(req,res){
    res.render("index")
})

app.get("/perfil/:nome?", function(req,res){
    var nome = req.params.nome
    // res.send(req.params.nome)
    // var empresa = req.params.empresa
    if(nome) {
      //se existir
      res.send(`<h2>Olá ${nome}, bem vindo à Fatec</h2>`)
    }else {
    res.send(`Por Favor, faça login para acessar o perfil`)

    }
    
    
})

app.get("/pedidos", function(req,res){
    // var produto = req.params.produto
    var produtos = [{nome:"celular", preco:3500},
                    {nome:"Computador", preco:20000},
                    {nome:"Carregador", preco:50},
                    {nome: "Video Game", preco: 5000},
                    {nome: "Refrigerante", preco:5},
                    {nome:"Tortilha de Chocolate", preco:12}
]
    res.render("pedidos",{
        produtos: produtos
    })
})
app.get("/videos/:video?", function(req,res){
    var video = req.params.video
    if (video){
    res.send(video)
    }else {
        res.render("videos")
    }
})

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com Sucesso!")
    }
})

