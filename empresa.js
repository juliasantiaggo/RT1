"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(funcionarios, endereco, nome, segmento, cnpj, telefones) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.nome = nome;
        this.segmento = segmento;
        this.cnpj = cnpj;
        this.telefones = telefones;
    }
    return Empresa;
}());
exports.default = Empresa;
