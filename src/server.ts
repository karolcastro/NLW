import express, { request, response } from 'express';
import "./dataBase";

const app = express();

// *
// GET = Buscas
// POST = Criacao
// PUT = Alteracao
// DELETE =  Deletar
// Patch =  Alterar uma informacao especifica
// *//

app.get("/", (request, response) => {
    // return response.send('Olá NLW 05')//envia a mensagem como resposta
    return response.json({
        message: 'Olá NLW 05',// envia um json como resposta
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: 'Usuário cadastrado com sucesso!'
    });
});


app.listen(3333, () => console.log("Server is running on port 3333"));