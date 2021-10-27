// 1 --- Crie um irmão para elementoOndeVoceEsta .

// let novoFilho = document.getElementById("pai");
// let filhoNovo = document.createElement('section')
// filhoNovo.id = 'filhoNovo';
// novoFilho.appendChild(filhoNovo);

// 2 ---Crie um filho para elementoOndeVoceEsta .

// let pai = document.getElementById('elementoOndeVoceEsta');
// let filhoMaisNovo = document.createElement('section')
// filhoMaisNovo.id = 'filhoMaisNovo';
// pai.appendChild(filhoMaisNovo);

// 3---Crie um filho para primeiroFilhoDoFilho .

// let pai = document.getElementById("primeiroFilhoDoFilho");
// let filhoFilho = document.createElement('section');
// filhoFilho.id = "filhoFilho";
// pai.appendChild(filhoFilho);

// // 4 ---A partir desse filho criado, acesse terceiroFilho .

// let acess = document.getElementById("filhoFilho");
// console.log(acess.parentElement.parentElement.nextElementSibling)

// parte 3;

// exercicio 1

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho;
// ( não entendi essa...)

// const pai = document.getElementById('pai');

// for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
//   const currentChildren = pai.childNodes[index];
//   if (currentChildren.id !== 'elementoOndeVoceEsta') {
//     currentChildren.remove();
//   }
// }

// const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// segundoEUltimoFilhoDoFilho.remove();
