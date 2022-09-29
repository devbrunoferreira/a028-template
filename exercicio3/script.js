
function checaCaps(event) {
    // Exibe o elemnto que ativou o evento
    // console.log(event.target);
    // //
    // console.log(event.key);

    const mensagem = document.getElementById('mensagem');

    if (event.key === 'Shift') {
        mensagem.innerHTML = "Solta o 'Shift' misera!";
    } else {
        mensagem.innerHTML = '';
    }
}