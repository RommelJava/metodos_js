function replace (){
var nome = 'José Angelo Stefânio Antônio      ' ;
console.log(`Nome original: ${nome}`);

// Removendo o espaço final
console.log(nome.trim());

// Quantidade caracteres
console.log(nome.length)

// Colocar em minuscula
console.log(nome.trim().toLowerCase());

// Colocar em Maiuscula
console.log(nome.trim().toUpperCase());

//Substituir o primeiro caracatere
console.log(nome.trim().replace('o','w'));

//Substituir todos os caracteres
console.log(nome.trim().replaceAll('o','w').replaceAll('ô','w'));

//Mostra a posição do indice da array do string selecionada
console.log(nome.indexOf('elo'));





}
replace()