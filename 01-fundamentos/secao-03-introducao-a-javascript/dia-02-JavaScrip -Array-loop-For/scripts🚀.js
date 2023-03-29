// 🚀 Lidando com arrays

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (let number of numbers) {
  console.log(number);
}

// Some todos os valores contidos no array e imprima o resultado.

let soma = 0;

for (let number of numbers) {
  soma += number;
}
console.log(`A soma é ${soma}`);

// Calcule e imprima a média aritmética dos valores contidos no array.
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

console.log(`A media é ${soma / numbers.length}`);

// Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

if (numbers[numbers.length - 1] >= 20) {
  console.log("Valor maior ou igual a 20");
} else {
  console.log("Valor menor ou igual a 20");
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorValor = numbers[0];
for (let number of numbers) {
  if (number > maiorValor) {
    maiorValor = number;
  }
}
console.log(`O maior valor é: ${maiorValor}`);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let imparCount = 0;
for (let number of numbers) {
  if (number % 2 != 0) {
    imparCount += 1;
  }
}

if (imparCount > 0) {
  console.log(`O total de impar é: ${imparCount}`);
} else {
  console.log(`Nenhum valor ímpar encontrado`);
}

// Utilizando for, descubra o menor valor contido no array e imprima-o.

let menorValor = numbers[0];
for (let number of numbers) {
  if (number < menorValor) {
    menorValor = number;
  }
}
console.log(`O menor valor é: ${menorValor}`);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

vinteCinco = [];

for (let contador = 1; contador <= 25; contador += 1) {
  vinteCinco.push(contador);
}
console.log(vinteCinco);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let numero of vinteCinco) {
  console.log(`${numero} dividido por 2 é: ${numero / 2}`);
}
