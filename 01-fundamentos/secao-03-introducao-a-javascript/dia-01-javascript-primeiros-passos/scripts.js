let a = 1;
let b = 2;
let c = 3;
// 2
if (a > b) {
  console.log("A é maior");
} else {
  console.log("B é maior");
}

// 3

if (a > b && a > c) {
  console.log("A é maior");
} else if (b > a && b > c) {
  console.log("B é maior");
} else {
  console.log("C é maior");
}

let xadrez = "rainha";

switch (xadrez) {
  case "peao":
    console.log(xadrez + "anda 2");
    break;
  case "rainha":
    console.log(xadrez + " qlqr lado");
    break;
  case "bispo":
    console.log(xadrez + "diagonal");
    break;
  case "torre":
    console.log(xadrez + "horizontal e vertical");
    break;
}

let number = 5;

if (number % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}

let salario = 3400;
let aliquotaINSS = 0;
let impostoRenda = 0;

if (salario <= 1556.94) {
  aliquotaINSS = salario * 0.08;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  aliquotaINSS = salario * 0.09;
} else if (salario >= 2594.93) {
  aliquotaINSS = salario * 0.11;
}

if (aliquotaINSS > 570.88) {
  aliquotaINSS = 570.88;
}

let salarioBase = salario - aliquotaINSS;

if (salarioBase < 1903.98) {
  impostoRenda = 0;
} else if (salarioBase >= 1903.98 && salarioBase <= 2826.65) {
  impostoRenda = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  impostoRenda = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  impostoRenda = salarioBase * 0.225 - 636.13;
} else {
  impostoRenda = salarioBase * 0.275 - 869.36;
}

total = (salarioBase - impostoRenda).toFixed(2);

console.log("Salário: " + total);

console.log(
  `O salário bruto é:R$:${salario}, a aliquotaINSS R$:${aliquotaINSS} e o imposto de renda R$:${impostoRenda.toFixed(
    2
  )}`
);
