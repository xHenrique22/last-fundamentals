import { Menu } from "./Menu";
import { mostraMenu } from "./mostraMenu";

const option = mostraMenu();

if (option == Menu.Cadastro){
    console.log('Faz o cadastro');
}

const vetor = [7, 40, 13, 5, 190, 30];
const found = vetor.filter(element => element > 10);

const cardapio = [];
cardapio['Hambúrguer'] = 20;
cardapio['Refrigerante'] = 6;
cardapio['Batata frita'] = 5;

console.log(cardapio['Hambúrguer']
)

vetor.forEach((item) => {
    console.log(item);

 });

const vetor2 = vetor.map((item) => {
    return item * 2;
 });

let media = (nota1: number, nota2: number) => {
    return (nota1 + nota2) / 2;
};

// Armazenando a resposta da função media(7, 6);
const armazenaMedia = media(7, 6);

media = () => {
    return 0;
}

function teste (media){

}

teste(media)

