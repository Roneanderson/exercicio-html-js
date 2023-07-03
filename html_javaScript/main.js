const form = document.getElementById('form-campo');
const camp1 = document.getElementById('nome-campo1');

function validaNumero(campoCompleto) {    
return campoCompleto;
}

form.addEventListener('submit', function(e) {
    let  formValido = false;
    e.preventDefault()


const camp2 = document.getElementById('nome-campo2');
const mensagemSucesso = `<b>O campo-a:<b/> <b>${camp1.value}</b> <b>e menor que campo-b:</b> <b>${camp2.value} prossiga!</b>`;

    formValido = validaNumero(camp1.value < camp2.value)
    if(formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        camp1.value = '';
        camp2.value = '';
    } else {
        camp1.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }

    })
    console.log(form);

    
