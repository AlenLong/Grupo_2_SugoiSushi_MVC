window.addEventListener('load', () => {

    console.log('Estoy vinculado');


    let forms = document.querySelectorAll('form')

    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', e => {
            e.preventDefault()

            Swal.fire({
                title: '¿Seguro quieres realizar esta acción?',
                text: "Esto no tiene vuelta atras!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, borralo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Borrado!',
                        'Su producto fue eliminado correctamente.',
                        'success'
                    )
                }
            }).then(result => {
                if (result.isConfirmed) {
                    forms[i].submit()
                }
            })
                .catch(error => console.log(error))
        })

    }
})
