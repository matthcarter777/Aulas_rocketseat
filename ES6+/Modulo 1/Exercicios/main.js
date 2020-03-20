//EX1
/*
class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    isAdmin() {
        return this.admin === true;
    }

}
class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');



console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
*/

//EX2
/* 
//Função Map
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idade = usuarios.map(function(usuarios,idade){
        return usuarios.idade;
})

//console.log(idade);

//função filter

const filtro = usuarios.filter(function(usuarios){
    return usuarios.idade > 18;
})

//console.log(filtro);

// função find

const res = usuarios.find(function(usuarios){
    return usuarios.empresa == 'Google';
})

//console.log(res);

const calculo = usuarios.map( users => ({...users, idade: users.idade * 2 })).filter(users => users.idade <= 50)

console.log(calculo)
*/

//EX3
/* 
//3.1

const arr = [1, 2, 3, 4, 5];

const arr1 = arr.map( item => item + 10)

console.log(arr1)

//3.2

const usuario = { nome:'diego', idade: 23};

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

//3.3

const nome = "Diego";
const idade = 23;

const mostrarUsuario = (nome, idade) => {
    return { nome, idade};
}

console.log(mostrarUsuario(nome, idade));
console.log(nome);


//3.4

const promise = () => new Promise(resolve,reject => resolve());


//EX4

const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const { nome, endereco:{ cidade , estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

//4.2

function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
   }
   console.log(mostraInfo({ nome: 'Diego', idade: 23 }))


//EX5

//5.1

const arr = [1,2,3,4,5,6];

//const [x , ...y] = arr;

//console.log(x);
//console.log(y);

//5.2

function soma(...params){
    return params.reduce((a,b)=> a+b);
}

console.log(soma(1,10,1));


//5.3

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: "Gabriel"};

const usuario3 = { ...usuario, endereco:{ cidade: "Lontras"} };

console.log(usuario3);

//EX6

const usuario = 'Diego';
const idade   = 23;

console.log(`O usuário ${usuario} possui ${idade} anos`);

//EX7

const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    cidade: 'Rio do sul'
};

console.log(usuario);
*/