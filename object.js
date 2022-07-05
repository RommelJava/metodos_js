var carro = new Object();

carro.modelo = 'Uno';
carro.ano = 1999;
carro.transmissao = 'CVT'

console.log(carro.ano)

// lista todos os nomes dos atributos do objeto
console.log(Object.keys(carro))

// lista todos os nomes de todos os atributos do objeto
console.log(Object.values(carro))