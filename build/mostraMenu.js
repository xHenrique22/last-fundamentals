"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostraMenu = void 0;
var PromptSync = require("prompt-sync");
var Menu_1 = require("./Menu");
var prompt = PromptSync();
function mostraMenu() {
    console.clear();
    console.log('--- Menu de opções ---');
    console.log('1 - Cadastrar');
    console.log('2 - Logar');
    console.log('3 - Sair');
    var option = prompt('\nEscolha a sua opção: ');
    var game;
    switch (option) {
        case '1':
            game = Menu_1.Menu.Cadastro;
            break;
        case '2':
            game = Menu_1.Menu.Login;
            break;
        case '3':
            game = Menu_1.Menu.Alterar;
            break;
        case '4':
            game = Menu_1.Menu.Sair;
            break;
    }
    return game;
}
exports.mostraMenu = mostraMenu;
