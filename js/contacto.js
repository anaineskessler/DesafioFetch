const formularioContacto = document.querySelector('#formularioContacto')

formularioContacto.addEventListener('submit', tomarSubmit)

async function tomarSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Gracias por contactarnos, te escribiré a la brevedad',
            imageUrl: './imagenes/Logo_Cocina_Anush.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'La Cocina de Anush',
            showConfirmButton: false,
            timer: 3000
        })
        
    }
}

