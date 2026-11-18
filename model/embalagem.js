export class Embalagem {
    constructor(descricao, material, capacidade) {
        this.descricao = descricao;
        this.material = material;
        this.capacidade = capacidade;
    }

    validar() {
        if (!this.descricao || this.descricao.trim().length < 3) {
            throw new Error('A descricao da Embalagem deve ter pelo menos 3 caracteres.');
        }

        if (!this.material || !this.material.trim()) {
            throw new Error('O Material da Embalagem é obrigatória.');
        }

        if (!this.capacidade || !this.capacidade.trim()) {
            throw new Error('A Capacidade da Embalagem é obrigatória.');
        }
    }
}