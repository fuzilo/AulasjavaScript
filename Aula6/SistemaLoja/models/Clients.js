//definir a estrutura de dados
//nome, cpf e endereço

import mongoose from "mongoose"
//inportar a classe service

const client = new mongoose.Schema(
    {
        name: String,
        cpf: String,
        address: String
    }
)

export default client 