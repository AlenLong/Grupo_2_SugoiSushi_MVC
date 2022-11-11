window.addEventListener('load', () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("login vinculado");

    const regExLetter = /^[A-Z]+$/;
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    let form = $('#formulario')
    let email = $('#email')
    let inputPass = $('#pass')

    let errores = [{
        id: 1,
        elemento:"email",
        mensaje: "El campo Email es obligatorio"
    },{
        id: 2,
        elemento:"inputPass",
        mensaje: "La contraseña es obligatoria"
    }]

    let eye = $('#eye-pass')
    let eye2 = $('#eye-pass2')
    eye.addEventListener('click',(e) => {
        inputPass.type === 'password' ? inputPass.type = 'text' : inputPass.type = 'password'
        if(eye.classList.contains('fa-eye-slash')){
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }else{
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }   
    })

    eye2.addEventListener('click',(e) => {
        inputPass2.type === 'password' ? inputPass2.type = 'text' : inputPass2.type = 'password'
        if(eye2.classList.contains('fa-eye-slash')){
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }else{
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }   
    })

    email.addEventListener('blur',() => {
        let error = {
            id: 1,
            elemento:"email",
            mensaje: "El campo Email es obligatorio"
        }
        let variable = true
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "<small>El campo Email es obligatorio</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 3 ){
                        e.mensaje = "El campo Email es obligatorio"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExEmail.test(email.value):
                $('#emailContainer').innerHTML = "<small>Por favor, escribe un correo electrónico válido</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 3 ){
                        e.mensaje = "Por favor, escribe un correo electrónico válido"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#emailContainer').innerHTML = ""
                email.style.border = "1px solid black"
                errores = errores.filter(error => {
                    return error.id !== 3
                })
                break;
        }
        console.log(errores);
    })
    inputPass.addEventListener('blur',() => {
        let error = {
            id: 2,
            elemento:"inputPass",
            mensaje: "La contraseña es obligatoria"
        }
        let variable = true
        switch (true) {
            case !inputPass.value:
                $('#passContainer').innerHTML = "<small>La contraseña es obligatoria</small>"
                inputPass.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 4 ){
                        e.mensaje = "La contraseña es obligatoria"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExPass.test(inputPass.value):
                $('#passContainer').innerHTML = "<small>Por favor, escribe una contraseña válida</small>"
                email.style.border = "1px solid red"
                errores.forEach(e => {
                    if(e.id === 3 ){
                        e.mensaje = "Por favor, escribe una contraseña válida"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#passContainer').innerHTML = ""
                inputPass.style.border = "1px solid black"
                errores = errores.filter(error => {
                    return error.id !== 4
                })
                break;
        }
    })
})