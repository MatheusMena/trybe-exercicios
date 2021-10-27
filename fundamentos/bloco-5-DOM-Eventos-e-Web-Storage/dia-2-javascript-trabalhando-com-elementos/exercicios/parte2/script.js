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

let pai = document.getElementById("primeiroFilhoDoFilho");
let filhoFilho = document.createElement('section');
filhoFilho.id = "filhoFilho";
pai.appendChild(filhoFilho);