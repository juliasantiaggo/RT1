"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        console.log("Empresa: ".concat(empresa.nome));
        console.log("Segmento: ".concat(empresa.segmento));
        console.log("CNPJ: ".concat(empresa.cnpj));
        console.log("Endere\u00E7o: ".concat(empresa.endereco.rua, ", ").concat(empresa.endereco.numero, ", ").concat(empresa.endereco.bairro, ", ").concat(empresa.endereco.cidade));
        console.log("Telefones:");
        empresa.telefones.forEach(function (tel) { return console.log("(".concat(tel.ddd, ") ").concat(tel.numero)); });
        console.log("Funcionários:");
        empresa.funcionarios.forEach(function (func) {
            console.log("- ".concat(func.nome, ", CPF: ").concat(func.cpf, ", (").concat(func.telefone.ddd, ") ").concat(func.telefone.numero));
        });
    };
    return Descritor;
}());
exports.default = Descritor;
