
//TUDO EM JS É OBJETO
//alert(nome[2])

//Declarando uma String
//var nome = "caio"

//Declarando um objeto em JS
var pessoa = {
    nome:"Nelson",
    dataNasc:"20/05/2022",
    cpf:17263647583,
    andar: function(){
        alert('ANDOU!')
    }
}




function lendoObjeto(){
    //IMPRIMINDO UM OBJETO
    //console.log(pessoa)
    let prop = "dataNasc"
    //pessoa[prop] = "12/01/2021"
    pessoa.dataNasc = "12/01/2021"
    console.log(pessoa[prop])
}

lendoObjeto()