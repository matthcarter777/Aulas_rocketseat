/*class list {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList {
    constructor(){
        super();

        this.usuario = 'Mateus';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();


class TodoList {

    constructor(){
        this.todos = [];
    }

    static addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }


}

TodoList.addTodo();


class Matematica {
    static soma(a ,b){
        return a + b;
    }
}

console.log(Matematica.soma(2, 3));



//Aula de Const E Let

//Operaçoes com Array

const arr = [ 1,2,5,8,9];

const newArr = arr.map(function(item, index){
    return item + index;
})

//console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
})

//console.log(sum)

const filter = arr.filter(function(item){
    return item % 2 === 0;
})

//console.log(filter);

const find = arr.find(function(item){
    return item === 1;
})

//console.log(find);



//#######################################
//Arrow function 

const arr = [ 1,2,5,8,9];

const newArr = arr.map(item => item * 2)

console.log(newArr);

const teste = () =>  {
    return "Teste";
}
console.log(teste());
*/

// Arrow function com valores padrão
/*
const soma = (a = 3, b = 6) => a + b;


console.log(soma(1));
console.log(soma());
*/

//Desestruturação 
/*
const usuario = {
    nome: 'Mateus',
    idade: 23,
    endereco: {
        cidade: "Campos belos",
        estado: "Goias",
    },
};

const { nome, idade, endereco:{ cidade } } = usuario;

//console.log(nome);
//console.log(idade);
//console.log(cidade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);

*/

//Operadores Rest/spread

//REST
/*
const usuario = {
    nome: "mateus",
    idade: 23,
    empresa: "nested"
};

const { nome, ...resto} = usuario;

//console.log(nome);
//console.log(resto);

const arr = [1,2,3,4,5];

const [ a, b, ...c] = arr;

//console.log(a);
//console.log(b);
//console.log(c);

function soma(a,b, ...params){
   //return params.reduce((total, next) => total + next);
   //return params; 
}

//console.log(soma(1,2,4));
*/

//SPREAD
/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

//console.log(arr3);

const usuario = {
    nome: "mateus",
    idade: 23,
};

const usuario2 = { ...usuario, nome: "Pedro"};

console.log(usuario2);
*/

//Teemplete Literals
/*
const nome = "mateus";
const idade = 23;

//console.log('Meu nome e ' + nome + ' e tenho ' + idade + 'anos');

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
*/

//Object short syntax
/*
const nome = 'Mateus';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'Nested'
};

console.log(usuario);
*/
