export class Embalagem {
    constructor(descricao, material, capacidade) {
        this.descricao = descricao;
        this.material = material;
        this.capacidade = capacidade;
    }

    validar() {
        if (!this.descricao || this.nome.trim().length < 3) {
            throw new Error('O nome do Operador deve ter pelo menos 3 caracteres.');
        }

        if (!this.matricula || !this.matricula.trim()) {
            throw new Error('A matricula do Operador é obrigatória.');
        }

        if (!this.matricula || !this.matricula.trim()) {
            throw new Error('O turno do Operador é obrigatória.');
        }
    }
}