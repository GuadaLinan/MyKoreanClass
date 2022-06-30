// Variables
const btnFormulario = document.getElementById('button');
const form = document.querySelector('#form');


form.addEventListener('submit', enviarFormulario)

function enviarFormulario(e) {

    e.preventDefault();

    btnFormulario.value = 'Enviando...'

    let nombreCompleto =document.getElementById('nombreCompleto').value
    let telefono =document.getElementById('telefono').value
    let emailContacto =document.getElementById('email').value
    let mensajeContacto = document.getElementById('mensaje').value

    let params = {
        user_id: '1_5g8bvDRBQdXIKJu',
        service_id: 'service_m2zm2o9',
        template_id: 'template_hb12lif',
        template_params: {
                'nombreCompleto': nombreCompleto,
                'email': emailContacto,
                'telefono': telefono,
                'mensaje': mensajeContacto
                }
    };
            
    let headers = {
        'Content-type': 'application/json'
    };
        
    let options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    };
        
    fetch('https://api.emailjs.com/api/v1.0/email/send', options)
        .then( async (response) => {
            if (response.ok) {
                btnFormulario.value = 'Enviar';
                Swal.fire({
                    icon: 'success',
                    iconColor:'#fad8ce',
                    title: 'Se envió su consulta con éxito',
                    text: '¡Estaremos respondiendo pronto!' + ' 바로 답장 할게요!',
                    customClass:{
                        confirmButton:'btn_4'
                    }
                })
                this.reset();
            } else {
                return response.text()
                .then(text => Promise.reject(text));
                }
        })
        .catch((error) => {
            console.log('Oops... ' + error);
        });
}