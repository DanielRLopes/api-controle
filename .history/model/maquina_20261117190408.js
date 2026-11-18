export class Maquina {
    constructor(nome, patrimonio, status) {
        this.nome = nome;
        this.patrimonio = patrimonio;
        this.status = status;
    }

    validar() {
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error('O nome do Operador deve ter pelo menos 3 caracteres.');
        }

        if (!this.patrimonio || !this.patrimonio.trim()) {
            throw new Error('A matricula do Operador é obrigatória.');
        }

        if (!this.status || !this.status.trim()) {
            throw new Error('O turno do Operador é obrigatória.');
        }
    }
}