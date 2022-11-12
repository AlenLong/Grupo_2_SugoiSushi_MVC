window.addEventListener('load', ()=> {

    let $ = (elemento) => document.querySelector(elemento);
    console.log('register vinculado')

    let form = $('#formulario');
    let nombre = $('#nombre');
    let apellido = $('#apellido');
    let email = $('#email');
    let inputPass = $('#password');
    let inputPass2 = $('#confirma');
    let imagen = $('#imagen');


    nombre.addEventListener('change', () => {
        switch (true) {
            case !nombre.value:
                $('#nameContainer').innerHTML = "<small>El campo Nombre es obligatorio</small>"
                nombre.style.border = "1px solid red"
                break;
        
            default:
                $('#nameContainer').innerHTML = ''
                break;
        }
    })

    apellido.addEventListener('change', () => {
        switch (true) {
            case !apellido.value:
                $('#apellidoContainer').innerHTML = "<small>El campo Apellido es obligatorio</small>"
                apellido.style.border = "1px solid red"
                break;
        
            default:
                $('#apellidoContainer').innerHTML = ''
                break;
        }
    })

    email.addEventListener('change', () => {
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "<small>El campo Email es obligatorio</small>"
                email.style.border = "1px solid red"
                break;
        
            default:
                $('#emailContainer').innerHTML = ''
                break;
        }
    })

    inputPass.addEventListener('change', () => {
        switch (true) {
            case !inputPass.value:
                $('#passContainer').innerHTML = "<small>La Contraseña es obligatoria</small>"
                inputPass.style.border = "1px solid red"
                break;
        
            default:
                $('#passContainer').innerHTML = ''
                break;
        }
    })

    inputPass2.addEventListener('change', () => {
        switch (true) {
            case !inputPass2.value:
                $('#pass2Container').innerHTML = "<small>La confirmacion es obligatoria</small>"
                inputPass2.style.border = "1px solid red"
                break;
            case inputPass2.value != inputPass.value:
                $('#pass2Container').innerHTML = "<small>Las Contraseñas no coinciden </small>"
                inputPass2.style.border = "1px solid red"
        
            default:
                $('#pass2Container').innerHTML = ''
                break;
        }
    })
})