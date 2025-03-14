import Empresa from "./empresa";

export default class Descritor {
    descrever(empresa: Empresa): void {
        console.log(`Empresa: ${empresa.nome}`);
        console.log(`Segmento: ${empresa.segmento}`);
        console.log(`CNPJ: ${empresa.cnpj}`);
        console.log(`Endereço: ${empresa.endereco.rua}, ${empresa.endereco.numero}, ${empresa.endereco.bairro}, ${empresa.endereco.cidade}`);
        console.log("Telefones:");
        empresa.telefones.forEach(tel => console.log(`(${tel.ddd}) ${tel.numero}`));
        console.log("Funcionários:");
        empresa.funcionarios.forEach(func => {
            console.log(`- ${func.nome}, CPF: ${func.cpf}, (${func.telefone.ddd}) ${func.telefone.numero}`);
        });
    }
}