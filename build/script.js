"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Almoco_1 = require("./Almoco");
var almoco = new Almoco_1.Almoco('peixe', 'arroz e feijão');
console.log(almoco.refeicao);
almoco.carne = 'frango';
console.log(almoco.refeicao);
