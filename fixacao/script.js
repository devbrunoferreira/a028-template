

function insereItem(event){
    event.preventDefault();
    // Selecionando os Elementos no HTML
    const meuInput = document.getElementById('meu-input');
    const lista = document.getElementById('lista');

    // Criando um Novo Elemento
    const novoElemento = document.createElement('li');
    const conteudo = document.createTextNode(meuInput.value);
    novoElemento.appendChild(conteudo);

    // Adicionando o Elemento a Lista
    lista.insertAdjacentElement('beforeend', novoElemento);

    meuInput.value = '';
}