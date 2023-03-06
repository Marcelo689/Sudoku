var alturaTabela = 5;
var numerosNecessarios = [];

function CriarCedulas(altura, distanciaEntreCedulas){

    var tabela = document.getElementById("principal");

    tabela.style = `grid-template-columns: repeat(${altura}, ${distanciaEntreCedulas}px);
    grid-template-rows: repeat(${altura}, ${distanciaEntreCedulas}px);`
    var numeroDeCedulas = altura * altura;
    for (let index = 0; index < numeroDeCedulas; index++) {
        var cedula = document.createElement("div");
        cedula.className = "cedula";

        tabela.appendChild(cedula);
    }
}

function PreencheComNumeros(){
    var arrayRetornoTabela = [];
    var contador = 0;

    while( contador < alturaTabela){

        for (let index = 1; index <= alturaTabela; index++) {
            arrayRetornoTabela.push(index);
            numerosNecessarios[index-1] = index;
        }
        contador++;
    }

    OrganizaTabelaSudoku(arrayRetornoTabela, )
    var tabela = document.getElementById("principal");
    
    for (let index = 0; index < tabela.childElementCount; index++) {
        tabela.children[index].textContent = arrayRetornoTabela[index];        
    }

}

function RandomizaArray(array){
    var arraySaida = [];
    
    while(arraySaida.length != array.length){
        var randomNumber = Math.floor(Math.random(array.length) + 1);
        if(!arraySaida.includes(randomNumber))
            arraySaida.push(randomNumber);
    }

    return arraySaida;
}

function OrganizaTabelaSudoku(arrayTabela){
    
    arrayTabela.forEach(linha => {
        while(contemTodosNumeros(numerosNecessarios, linha)){
            
        }
    });
}

function contemNumero(array, numero){
    return array.includes(numero);
}

function contemTodosNumeros(arrayNumerosNecessario, arraylinha){
    for (let index = 0; index < arrayNumerosNecessario.length; index++) {
        var retorno = contemNumero(arrayNumerosNecessario, arraylinha[index]);        
        var retornoIndiceColuna = indiceColunaDisponivel(arraylinha, index, ""); 
        if(retorno || retornoIndiceColuna)
            return false;
    }

    return true;
}

function indiceColunaDisponivel(arrayLinha, indice, valorInvalido){
    var numero = arrayLinha[indice];
    return numero != valorInvalido;        
}

CriarCedulas(alturaTabela, 60);
PreencheComNumeros();