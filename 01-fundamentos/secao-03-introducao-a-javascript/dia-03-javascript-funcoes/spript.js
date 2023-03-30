let clientesTrybeBank = ["Ada", "John", "Gus"];

function confereString(cliente) {
  if (typeof cliente === "string") {
    return true;
  } else {
    return console.log('O parâmetro passado deve ser do tipo "string"!');
  }
}

function confereCliente(cliente) {
  if (clientesTrybeBank.includes(cliente)) {
    return true;
  } else {
    return console.log("O cliente nao existe");
  }
}

function removeCliente(cliente) {
  if (confereString(cliente)) {
    if (confereCliente(cliente)) {
      clientesTrybeBank.splice(clientesTrybeBank.indexOf(cliente), 1);
      return console.log(`O cliente ${cliente} foi removido `);
    }
  }
}

removeCliente("Ada");
console.log(clientesTrybeBank)

// GABARITO;

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function validaCliente(cliente) {

//   if (typeof cliente !== 'string') {

//     return 'O parâmetro passado deve ser do tipo "string"!';

//   } else {

//     return true;

//   }

// }

// function clienteIndex(cliente) {

//   for (let index = 0; index < clientesTrybeBank.length; index += 1) {

//     if (cliente === clientesTrybeBank[index]) {

//       return index;

//     }

//   }

//   return false;

// }

// function removeCliente(cliente) {

//   let validacao = validaCliente(cliente);

//   if (validacao !== true) {

//     return validacao;

//   }

//   let index = clienteIndex(cliente);

//   if (index === false) {

//     return 'Cliente não encontrada(o).'

//   }

//   clientesTrybeBank.splice(index, 1);

//   return 'Cliente excluída(o) com sucesso.';

// }

// console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!

// console.log(removeCliente('Barney')); // Cliente não encontrada(o)

// console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.

// console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]
