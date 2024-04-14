import EventoDAO from "../Persistencia/EventoDAO.js";

export default class Evento{
    #codigo;
    #nome;
    #sinopse;
    #genero;
    #duracao;
    #data;
    #hora;
    #preco;
    #local;
    #imagem;

    constructor(codigo=0, nome="", sinopse="", genero="", duracao="", data=new Date(), hora="", preco=0.00, local="", imagem="") {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#sinopse = sinopse;
        this.#genero = genero;
        this.#duracao = duracao;
        this.#data = data;
        this.#hora = hora;
        this.#preco = preco;
        this.#local = local;
        this.#imagem = imagem;

    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get sinopse(){
        return this.#sinopse;
    }

    set sinopse(novoSinopse){
        this.#sinopse = novoSinopse;
    }

    get genero(){
        return this.#genero;
    }

    set genero(novoGenero){
        this.#genero = novoGenero;
    }

    get duracao(){
        return this.#duracao;
    }

    set duracao(novoDuracao){
        this.#duracao = novoDuracao;
    }

    get data(){
        return this.#data;
    }

    set data(novoData){
        this.#data = novoData;
    }

    get hora(){
        return this.#hora;
    }

    set hora(novoHora){
        this.#hora = novoHora;
    }

    get preco(){
        return this.#preco;
    }

    set preco(novoPreco){
        this.#preco = novoPreco;
    }

    get local(){
        return this.#local;
    }

    set local(novoLocal){
        this.#local = novoLocal;
    }

    get imagem(){
        return this.#imagem;
    }

    set imagem(novaImagem){
        this.#imagem = novaImagem;
    }

    async gravar(){
        const dao = new EventoDAO();
        await dao.gravar(this);
    }

    async atualizar(){
        const dao = new EventoDAO();
        await dao.atualizar(this);
    }

    async excluir(){
        const dao = new EventoDAO();
        await dao.excluir(this);
    }

    async consultar(nome){
        const dao = new EventoDAO();
        return await dao.consultar(nome);
    }

    toString(){
        return `Evento codigo: ${this.#codigo} - nome: ${this.#nome}`;
    }

    toJSON(){
        return {
            "codigo": this.#codigo,
            "nome": this.#nome,
            "sinopse": this.#sinopse,
            "genero": this.#genero,
            "duracao": this.#duracao,
            "data": this.#data,
            "hora": this.#hora,
            "preco": this.#preco,
            "local": this.#local,
            "imagem": this.#imagem
        }
    }
}