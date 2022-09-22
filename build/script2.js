"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./Menu");
var mostraMenu_1 = require("./mostraMenu");
var option = (0, mostraMenu_1.mostraMenu)();
if (option == Menu_1.Menu.Cadastro) {
    console.log('Faz o cadastro');
}
var vetor = [7, 40, 13, 5, 190, 30];
var found = vetor.filter(function (element) { return element > 10; });
var cardapio = [];
cardapio['Hambúrguer'] = 20;
cardapio['Refrigerante'] = 6;
cardapio['Batata frita'] = 5;
console.log(cardapio['Hambúrguer']);
vetor.forEach(function (item) {
    console.log(item);
});
var vetor2 = vetor.map(function (item) {
    return item * 2;
});
var media = function (nota1, nota2) {
    return (nota1 + nota2) / 2;
};
// Armazenando a resposta da função media(7, 6);
var armazenaMedia = media(7, 6);
media = function () {
    return 0;
};
function teste(media) {
}
teste(media);
