let select = document.querySelector("select");

let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']; 


for(let index = 0; index < estados.length; i++) {

    let options = document.createElement('option');
    select.appendChild(options);
    options.innerText = estados[index];
    
}
    
    


