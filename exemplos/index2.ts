interface DadosDoUsuario {
    id: string, 
    nome: string, 
    email:string
}

function cadastrarUsuario( { id, nome, email} : DadosDoUsuario){ // utilizacao da interface com a desestruturacao {} para conseguir acessar o objeto
    console.log(id, nome, email)
}

// function cadastrarUsuario(dadosDoUsuario : DadosDoUsuario){ // utilizacao da interface para acessar cada um dos atributos
//     console.log(dadosDoUsuario.email)
// }

// function cadastrarUsuario(id: string, nome: string, email:string){ // tipagem do TypeScript para não permitir outro tipo de dado
//     console.log(id, nome, email)
// }

// class CadastrarAdministrador {
//     cadastro(){
//         cadastrarUsuario('stringId', 'KarolNome', 'karol@email.com')
//     }
// }