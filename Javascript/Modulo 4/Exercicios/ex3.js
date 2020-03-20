var listELement  = document.querySelector('ul');
var inputElement = document.querySelector('input');
var btnElement   = document.querySelector('button');

function renderRepositories(repositories){
    listELement.innerHTML = "";

    for ( repo of repositories ){
        const texteElement = document.createTextNode(repo.name);
        const liELement    = document.createElement('li');

        liELement.appendChild(texteElement)
        listELement.appendChild(liELement);
    }
}

function renderLoading(loading){
    listELement.innerHTML = "";
    var texteElement = document.createElement('Carregando...');
    var loadingElement    = document.createElement('li');

    loadingElement.appendChild(texteElement);
    listELement.appendChild(loadingElement);
}

function renderError(loading){
    listELement.innerHTML = "";
    var texteElement = document.createElement('Erro!');
    var errorElement   = document.createElement('li');

    errorElement.style.color = "#f00";

    errorElement.appendChild(texteElement);
    listELement.appendChild(errorElement);
}

function listRepositories(){
    var user = inputElement.value;

    if(!user) return;
    renderLoading();
    axios.get('https://api.github.com/users/' + user + '/repos')
      .then(function (response) {
        renderRepositories(response.data);
      })
      .catch(function () {
        renderError();
      });
}

btnElement.onclick = function(){
    listRepositories();
}