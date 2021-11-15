//  1)  Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// // Modifique a estrutura da função para que ela seja uma arrow function .
// // Modifique as concatenações para template literals .

//  const testingScope = escopo => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';  // coloquei 'let' á 'var'
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   };
// testingScope(true);


//   testingScope(true);
  let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
  
}
const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

      console.log(sortedArray.sort()); 

// let arr = [1,4,3,2];

//    console.log(arr.sort());