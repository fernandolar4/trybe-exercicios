// 🚀 Exercício 3

// Por meio do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’] deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

let basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

// for..of ao iterar um array mostra o elemento
// for..in mostra seu index

let fullBasket = {};

let contaFrutas = (basket) => {
  for (let fruta of basket) {
    if (fullBasket[fruta]) {
      fullBasket[fruta] += 1;
    } else {
      fullBasket[fruta] = 1;
    }
  }
  return fullBasket;
};
console.log(contaFrutas(basket));

let sumario = [];

for (fruit in fullBasket) {
  let message = `${fullBasket[fruit]} ${fruit}`;
  if (fullBasket[fruit] > 1) message += "s";
  sumario.push(message);
}

// let sumario2 = "Sua cesta possui: ";
// for (fruit in fullBasket) {
//   let message = `${fullBasket[fruit]} ${fruit}s, `;
//   sumario2 += message;
// }

console.log(`Sua cesta possui: ${sumario.join(", ")}.`);
// console.log(sumario2);

// 🚀 Bônus – Organização de lições

// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função para contar o número de estudantes que assistiram às aulas de Matemática.

// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função que retorne um objeto que represente o relatório da pessoa instrutora, as aulas ministradas e o número total de estudantes. A saída deverá ser a seguinte:

// console.log(createReport(allLessons, "Maria Clara"));
/* {
    professor: 'Maria Clara',
    aulas: [ 'Matemática', 'Matemática' ],
    estudantes: 30
  } */
