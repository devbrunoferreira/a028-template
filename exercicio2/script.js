
// function escondeSenha() {
//     event.preventDefault();
//     const inputPass = document.getElementById('password');
    
//     inputPass.setAttribute('type', 'password');
// }

function escondeSenha(event) {
    event.preventDefault();
    const inputPass = document.getElementById('password');
    
    if (inputPass.type === 'text'){
        inputPass.setAttribute('type', 'password');
        document.querySelector('button').textContent = 'mostrar senha';
    } else {
        inputPass.setAttribute('type', 'text');
        document.querySelector('button').textContent = 'esconder senha';
    }
}

const formulario = document.querySelector('.light');

formulario.classList.remove('light');
formulario.classList.add('dark');