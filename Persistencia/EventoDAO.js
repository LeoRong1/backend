import conectar from "./Conexao.js";
import Evento from "../Modelo/Evento.js";

export default class EventoDAO{
    async gravar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `INSERT INTO evento (nome, sinopse, genero, duracao, data, hora, preco, local, imagem) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                evento.nome,
                evento.sinopse,
                evento.genero,
                evento.duracao,
                evento.data,
                evento.hora,
                evento.preco,
                evento.local,
                evento.imagem
            ];
            const [resultados, campos] = await conexao.execute(sql, parametros);
            evento.codigo = resultados.insertId;
        }
    }

    async atualizar(evento){
        if(evento instanceof Evento){
            const conexao = await conectar();
            const sql = `UPDATE evento SET nome = ?, sinopse = ?, genero = ?, duracao = ?, data = ?, hora = ?, preco = ?, local = ?,imagem = ? WHERE id = ?`;
            const parametros = [
                evento.nome,
                evento.sinopse,
                evento.genero,
                evento.duracao,
                evento.data,
                evento.hora,
                evento.preco,
                evento.local,
                evento.imagem,
                evento.codigo
            ];
            await conexao.execute(sql,parametros);
            
        }
    }

    async excluir(evento) {
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `DELETE FROM evento WHERE id = ?`;
            const parametros = [
                evento.codigo
            ]
            await conexao.execute(sql,parametros);
        }
    }

    async consultar(nome){
        if (nome === undefined){
            nome = "";
        }
        let sql = "";
        if (isNaN(parseInt(nome))){
            sql = `SELECT * FROM evento WHERE nome LIKE ?`;
            nome = '%' + nome + '%';
        }
        else{
            sql = `SELECT * FROM evento WHERE id = ?`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,[nome]);
        let listaEventos = [];
        for (const registro of registros){
            const evento = new Evento(
                registro.id,
                registro.nome,
                registro.sinopse,
                registro.genero,
                registro.duracao,
                registro.data,
                registro.hora,
                registro.preco,
                registro.local,
                registro.imagem
            );
            listaEventos.push(evento);
        }
        return listaEventos;
    }
}