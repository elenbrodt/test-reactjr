CREATE DATABASE produtos_db;

USE produtos_db;

CREATE TABLE `produtos` (
  `codigo_id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(500) NOT NULL,
  `preco` FLOAT NOT NULL,
  `data_cadastro`DATE DEFAULT NULL,
);
