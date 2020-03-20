/*
var idade = 20;

function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return idade >= 18 ? resolve() : reject();
        }, 2000);
    });
}

checaIdade(idade)
    .then(function() {
        console.log("Maior que 18");
})
    .catch(function() {
        console.log("Menor que 18");
});

*/

/*
var inputElement = document.querySelector('#app input');
var btnElement   = document.querySelector('#app button');


function checaIdade(){
    var idadeElement = inputElement.value;
    
    if(inputElement.value != ''){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                return idadeElement >= 18 ? resolve() : reject();
            }, 2000);
        });    
    }else{
        alert('insira um valor');
    }

    
}

checaIdade(idad)
    .then(function() {
        console.log("Maior que 18");
})
    .catch(function() {
        console.log("Menor que 18");
});

btnElement.onclick = function(){
    checaIdade();
}
*/