const { application } = require("express")
const express = require("express")
application.get('/', (requisicao, resposta) => {
    resposta.send("Estou funcionando co, o express")
})

application.listen(3000, ()=> {
    console.log("Servidor rodando na porta 30000") 
})