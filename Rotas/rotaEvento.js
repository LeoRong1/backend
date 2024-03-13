import { Router } from "express";
import EventoControle from '../Controle/eventoControle.js';

const rotaEvento = Router();
const evenControle = new EventoControle;

rotaEvento.get('/:nome', evenControle.consultar).post('/', evenControle.gravar).put('/:codigo', evenControle.atualizar).patch('/:codigo', evenControle.atualizar).delete('/:codigo', evenControle.excluir);

export default rotaEvento;