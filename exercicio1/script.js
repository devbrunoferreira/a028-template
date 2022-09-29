// Cria um novo elemento
const elemento0 = document.createElement('li');
const elemento5 = document.createElement('li');

// Cria um novo conteudo
const conteudo0 = document.createTextNode('Item 0');
const conteudo5 = document.createTextNode('Item 5');

// Alocado o novo conteúdo no elemento criado
elemento0.appendChild(conteudo0);
elemento5.appendChild(conteudo5);

// Selecionando o elemento pai
const elementoPai = document.getElementById('lista');

// 1 - Adiciona no elemento pai o novo elemento criado (antes do primeiro elemento filho)
// 2 - Adiciona no elemento pai o novo elemento criado (depois do último elemento filho)
elementoPai.insertAdjacentElement('afterbegin', elemento0);
elementoPai.insertAdjacentElement('beforeend', elemento5);