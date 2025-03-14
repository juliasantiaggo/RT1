import Telefone from "./telefone";
import Endereco from "./endereco";

export default class Funcionario {
    constructor(
        public nome: string,
        public cpf: string,
        public telefone: Telefone,
        public endereco: Endereco
    ) {}
}