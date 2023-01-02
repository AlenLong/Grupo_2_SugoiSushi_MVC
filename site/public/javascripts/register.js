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
    let terminos = $('#checkContainer')


    let  errors = []    //   en pg lo reliza con objeto literal de arr 


    nombre.addEventListener('change', () => {
        switch (true) {
            case !nombre.value:
                $('#nameContainer').innerHTML = "<small>El Nombre es obligatorio</small>"
                nombre.style.border = "1px solid red"
                
                let error = {
                    id: 1,
                    elemento:'nombre',
                    mensaje: 'El Nombre es obligatorio'
                }
                let errorCheck = true
                errors.forEach(e => {
                    if (e.id === 1){
                        errorCheck = false
                    }
                });
                if (errorCheck) {
                    errors.push(error)
                }
                console.log(errors)

                break;
        
            default:
                $('#nameContainer').innerHTML = ''
                break;
        }
    })


    apellido.addEventListener('change', () => {
        switch (true) {
            case !apellido.value:
                $('#apellidoContainer').innerHTML = "<small>El Apellido es obligatorio</small>"
                apellido.style.border = "1px solid red"

                let error = {
                    id: 2,
                    elemento:'apellido',
                    mensaje: 'El Apellido es obligatorio'
                }
                let errorCheck = true
                errors.forEach(e => {
                    if (e.id === 2){
                        errorCheck = false
                    }
                });
                if (errorCheck) {
                    errors.push(error)
                }
                console.log(errors)
                break;
        
            default:
                $('#apellidoContainer').innerHTML = ''
                break;
        }
    })


    email.addEventListener('change', () => {
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "<small>El Email es obligatorio</small>"
                email.style.border = "1px solid red"

                let error = {
                    id: 3,
                    elemento:'email',
                    mensaje: 'El Email es obligatorio'
                }
                let errorCheck = true
                errors.forEach(e => {
                    if (e.id === 3){
                        errorCheck = false
                    }
                });
                if (errorCheck) {
                    errors.push(error)
                }
                console.log(errors)
                
                
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

                let error = {
                    id: 4,
                    elemento:'inputPass',
                    mensaje: 'La Contraseña es obligatoria'
                }
                let errorCheck = true
                errors.forEach(e => {
                    if (e.id === 4){
                        errorCheck = false
                    }
                });
                if (errorCheck) {
                    errors.push(error)
                }
                console.log(errors)
                break;
        
            default:
                $('#passContainer').innerHTML = ''
                break;
        }
    })


    inputPass2.addEventListener('change', () => {

        let error = {
            id: 5,
            elemento:'inputPass2',
            mensaje: 'El Contraseña es obligatorio'
        }
        let errorCheck = true

        switch (true) {
            case !inputPass2.value:
                $('#pass2Container').innerHTML = "<small>La confirmacion es obligatoria</small>"
                inputPass2.style.border = "1px solid red"
                error.mensaje = 'La confirmacion es obligatoria'
                
                errors.forEach(e => {
                    if (e.id === 5){
                        errorCheck = false
                    }
                });
                if (errorCheck) {
                    errors.push(error)
                }
                console.log(errors)
                break;
            case inputPass2.value != inputPass.value:
                $('#pass2Container').innerHTML = "<small>Las Contraseñas no coinciden </small>"
                inputPass2.style.border = "1px solid red"
                error.mensaje = 'Las Contraseñas no coinciden '
                
                errors.forEach(e => {
                    if (e.id === 5){
                        errorCheck = false
                    }
                });
                if (errorCheck) {
                    errors.push(error)
                }
                console.log(errors)
        
            default:
                $('#pass2Container').innerHTML = ''
                break;
        }
    })


    let eyePass = $('#password')
    let eyePass2 = $('#confirma')

    let eye = $('#eye-pass')
    let eye2 = $('#eye-pass2')

    eye.addEventListener('click', (e) => {
        eyePass.type === 'password' ?  eyePass.type = 'text' :  eyePass.type = 'password'
        console.log(eye.classList.contains('fa-eye-slash'))
        if(eye.classList.contains('fa-eye-slash')){
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }else{
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }

    })

    eye2.addEventListener('click', (e) => {
        eyePass2.type === 'password' ?  eyePass2.type = 'text' :  eyePass2.type = 'password'
        console.log(eye2.classList.contains('fa-eye-slash'))
        if(eye2.classList.contains('fa-eye-slash')){
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }else{
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }

    })


})