// Com base neste objeto, faça os exercícios a seguir.

let info = {
  personagem: "Margarida",

  origem: "Pato Donald",

  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave.

console.log(`boas vindas ${info.personagem}`);

// 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor.

info.recorrente = "sim";

console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
  console.log(key);
}

// 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.

for (let key in info) {
  console.log(info[key]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

// let info2 = Object.assign({}, info);

// console.table(info2);

info2 = {
  personagem: "Tio Patinhas",

  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",

  nota: "O último MacPatinhas",
  recorrente: "sim",
};

for (let key in info) {
  if (key === "recorrente" && info[key] === "sim" && info2[key] === "sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " & " + info2[key]);
  }
}
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🚀 Leitura de objetos

// Com base neste objeto, faça os exercícios a seguir.

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

// 1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
console.log(
  `O livro favorito de ${leitor.nome} se chama ${leitor.livrosFavoritos[0].titulo}`
);

// 2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",

  autor: "JK Rowling",

  editora: "Rocco",
});

console.log(leitor.livrosFavoritos);

// 3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

console.log(` Julia tem ${leitor.livrosFavoritos.length} livros favoritos `);
