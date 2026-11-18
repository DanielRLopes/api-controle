export class Maquina {
    constructor(nome, patrimonio, maquina_status) {
        this.nome = nome;
        this.patrimonio = patrimonio;
        this.maquina_status = maquina_status;
    }

    validar() {
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error('O nome da Maquina deve ter pelo menos 3 caracteres.');
        }

        if (!this.patrimonio || !this.patrimonio.trim()) {
            throw new Error('O patrimonio da Maquina é obrigatório.');
        }

        if (!this.maquina_status || !this.maquina_status.trim()) {
            throw new Error('O status da Maquina é obrigatória.');
        }
    }
}