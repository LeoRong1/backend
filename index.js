import Evento from "./Modelo/Evento.js";
let date = new Date();
const evento = new Evento(8, "Perdido", "Quando um poder ancestral é liberado, o Aquaman deve forjar uma aliança incômoda com um aliado improvável para proteger Atlântida e o resto do mundo, de uma devastação irreversível.", "Aventura", "124 minutos", date, "15:45", 20.00, "Deviacom Ingressos-Presidente Prudente");

// evento.gravar().then(() =>{
//     console.log("Evento gravado com sucesso!");
// }).catch((erro) => {
//     console.log(erro);
// });

evento.atualizar().then(() =>{
    console.log("Evento atualizado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});

// evento.excluir().then(() =>{
//     console.log("Evento excluido com sucesso!");
// }).catch((erro) => {
//     console.log(erro);
// });

const eventoQQ = new Evento();

// eventoQQ.consultar(1).then((listaEventos) => {
//     console.log("Eventos encontrados:")
//     for (const evento of listaEventos) {
//         console.log(evento.toJSON());
//     }
// }).catch((erro) => {
//     console.log("Nao foi possivel consultar o evento", erro);
// });