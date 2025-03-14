import Funcionario from "./funcionario";
import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Empresa {
    constructor(
        public funcionarios: Funcionario[],
        public endereco: Endereco,
        public nome: string,
        public segmento: string,
        public cnpj: string,
        public telefones: Telefone[]
    ) {}
}