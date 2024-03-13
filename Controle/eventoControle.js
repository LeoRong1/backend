import Evento from "../Modelo/Evento.js";

export default class EventoControle {

    gravar(requisicao, resposta){
        resposta.type('application/json');

        if(requisicao.method === "POST" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const nome = dados.nome;
            const sinopse = dados.sinopse;
            const genero = dados.genero;
            const duracao = dados.duracao;
            const data = dados.data;
            const hora = dados.hora;
            const preco = dados.preco;
            const local = dados.local;
            
            if(nome && sinopse && genero && duracao && data && hora && preco && local){
                const evento = new Evento(0, nome, sinopse, genero, duracao, data, hora, preco, local);
                evento.gravar().then(() =>{
                    resposta.status(201)
                    resposta.json({
                        "status":true,
                        "mensagem": "Evento gravado com sucesso!",
                        "codigo_cliente": evento.codigo
                    })
                }).catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Nao foi possivel armazenar o evento!" + erro.message
                    });
                });
            }

            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Por favor, informe todos os dados do evento, conforme a API"

                });
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisicao invalida! Esperando o metodo POST e os dados no formato JSON para gravar um evento!"

            });
        }
    }

    atualizar(requisicao, resposta){
        resposta.type('application/json');
        if(requisicao.method === "PATCH" || requisicao.method === "PUT" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const codigo = requisicao.params.codigo;
            const nome = dados.nome;
            const sinopse = dados.sinopse;
            const genero = dados.genero;
            const duracao = dados.duracao;
            const data = dados.data;
            const hora = dados.hora;
            const preco = dados.preco;
            const local = dados.local;
            if(codigo && codigo > 0 && nome && sinopse && genero && duracao && data && hora && preco && local){
                const evento = new Evento(codigo, nome, sinopse, genero, duracao, data, hora, preco, local);
                evento.atualizar().then(() =>{
                    resposta.status(200);
                    resposta.json({
                        "status":true,
                        "mensagem": "Evento atualiado com sucesso!"
                    })
                }).catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Nao foi possivel atualizar o evento!" + erro.message
                    })
                });

            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Por favor, informe todos os dados do evento, conforme documentacao da API!"
                })
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisicao invalida! Esperando o metodo PATCH ou PUT e dados no formato JSON para atualizar o evento!"
            })
        }

    }

    excluir(requisicao, resposta){
        resposta.type('application/json');
        if(requisicao.method === "DELETE" ){
            const codigo = requisicao.params.codigo;
            if(codigo && codigo > 0){
                const evento = new Evento(codigo);
                evento.excluir().then(() =>{
                    resposta.status(200);
                    resposta.json({
                        "status":true,
                        "mensagem": "Evento excluido com sucesso!"
                    })
                }).catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Nao foi possivel excluir evento!" + erro.message
                    })
                })
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Por favor, informe o codigo do evento ue deseja excluir conforme a documentacao da API!"
                })
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisicao invalida! Esperando o metodo DELETE para excluir um evento!"
            })
        }
    }

    consultar(requisicao, resposta){
        resposta.type('application/json');
        if(requisicao.method === "GET" ){
            const nome = requisicao.params.nome;
            const evento = new Evento(0);
            evento.consultar(nome).then((eventos)=>{
                resposta.status(200);
                resposta.json(eventos);
            }).catch((erro) =>{
                resposta.status(500);
                resposta.json({
                    "status":false,
                    "mensagem": "Nao foi possivel consultar o evento!" + erro.message
                })
            })
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisicao invalida! Esperando o metodo GET para excluir um evento!"
            })
        }
    }

}