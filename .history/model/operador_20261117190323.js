export class Operador {
    constructor(nome, matricula, turno) {
        this.nome = nome;
        this.matricula = matricula;
        this.turno = turno;
    }

    validar() {
        if (!this.nome || this.nome.trim().length < 3) {
            throw new Error('O nome do Operador deve ter pelo menos 3 caracteres.');
        }

        if (!this.matricula || !this.matricula.trim()) {
            throw new Error('A matricula do Operador é obrigatória.');
        }

        if (!this.matricula || !this.matricula.trim()) {
            throw new Error('A matricula do Operador é obrigatória.');
        }
    }
}