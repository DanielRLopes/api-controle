CREATE DATABASE controle_embalagens;
USE controle_embalagens;

CREATE TABLE embalagem (
id_embalagem INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(120) NOT NULL,
material VARCHAR(120) NOT NULL,
capacidade VARCHAR(120) NOT NULL
);

CREATE TABLE maquina (
id_maquina INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(120) NOT NULL,
patrimonio DECIMAL(10,2) NOT NULL,
maquina_status VARCHAR(120) NOT NULL
);

CREATE TABLE operador (
id_operador INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(120) NOT NULL,
matricula INT NOT NULL,
turno INT NOT NULL
);