const express = require("express") //importando o express
const app = express() 

app.set("view engine", "ejs")

// app.get("/", function(req,res){
//     res.send("<h1>Bem Vindo ao meu Site</h1>")
// })

app.get("/", function(req,res){
    res.render("index")
})

app.get("/perfil", function(req,res){
    res.send("<h1>Perfil do Usuário</h1>")
})

app.get("/pedidos", function(req,res){
    res.send("<h1>Pedidos</h1>")
})
app.get("/videos", function(req,res){
    res.send("<h1>Videos</h1>")
})

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com Sucesso!")
    }
})

