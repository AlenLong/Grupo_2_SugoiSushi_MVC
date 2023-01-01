window.addEventListener('load', () => {

    /* Funciones para no declarar a cada rato document */
    const $ = (tag) => document.querySelector(tag)
    const id = (tag) => document.getElementById(tag)

    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        console.log(arr)
        if (!arr.includes(false)) {
            btn.disabled = false
            btn.style.backgroundColor = "#ffffff"
        } else {
            btn.disabled = true
            btn.style.backgroundColor = "#black"
        }
    }

    /* Elementos para la validación*/
    let categoria = $('#categoria')
    let nombreProducto = $('#nombreProducto')
    let descripcion = $('#descripcion')
    let precio = $('#precio')
    let descuento = $('#descuento')
    let image = $('#image')
    let disponible = $('#disponible')
    let btn = $('#btn-submit')

    /* Expresiones regulares utilizar */
    const regExLetter = /^[A-Z]+$/
    let regNumberPositivos = /^[0-9]+/
    let regExNumber = /^[+]?([0-9][0-9]?|150)$/
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/

    /* validar elementos */

    /* CATEGORIAS */

    categoria.addEventListener('blur', function () {
        console.log(this.value);
        switch (true) {
            case !(this.value.trim()):
                $('#errorCategorias').innerHTML = "Debes seleccionar una categoria"
                this.classList.add('is-invalid')
                validate.categoria = false
                break;
            default:
                $('#errorCategorias').innerHTML = ''
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.categoria = true
                break;
        }
        funcValidate(validate)
    })

    /* NOMBRE DEL PRODUCTO */

    nombreProducto.addEventListener('blur', function () {
        switch (true) {
            case !(this.value.trim()):
                $('#errorNombreProducto').innerHTML = "Debes ingresar un nombre de producto"
                this.classList.add('is-invalid')
                validate.nombreProducto = false
                break;
            case !(this.value.trim().length > 2 && this.value.trim().length < 50):
                $('#errorNombreProducto').innerHTML = "El producto debe contener 2 letras min y max 50"
                this.classList.add('is-invalid')
            validate.nombreProducto = false
                break;
            default:
                $('#errorNombreProducto').innerHTML = null 
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.nombreProducto = true
                break;
        }
        funcValidate(validate)
    })

    /* DESCRIPCION */

    descripcion.addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('#errorDescripcion').innerHTML = "Debes ingresar una descripcion de tu producto"
                this.classList.add('is-invalid')
                validate.descripcion = false
                break;
            case !(this.value.trim().length >= 2 && this.value.trim().length < 100):
                $('#errorDescripcion').innerHTML = "La descripcion del producto debe contener 2 letras min y max 100"
                this.classList.add('is-invalid')
                validate.descripcion = false
                break;
            default:
                $('#errorDescripcion').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.descripcion = true
                break;
        }
        funcValidate(validate)
    })

    /* PRECIO */

    precio.addEventListener('blur', function () {
        console.log(this.value);
        switch (true) {
            case !(this.value.trim()):
                $('#errorPrecio').innerHTML = "Debes ingresar un precio a tu producto"
                this.classList.add('is-invalid')
                validate.precio = false
                break;
            case !(regNumberPositivos.test(this.value.trim())):
                $('#errorPrecio').innerHTML = "Debe ingresar un precio valido"
                this.classList.add('is-invalid')
                validate.precio = false
                break;
                case (this.value.trim() < 1 ):
                    $('#errorPrecio').innerHTML = "El debe ser mayor a 1"
                    this.classList.add('is-invalid')
                    validate.precio = false
                    break;
            default:
                $('#errorPrecio').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.precio = true
                break;
        }
        funcValidate(validate)
    })

    /* DESCUENTO */
    
    descuento.addEventListener('blur', function () {
        switch (true) {
            case !(regExNumber.test(this.value.trim())):
                $('#errorDescuento').innerHTML = "El descuento no puede ser mayor a 2 cifras"
                this.classList.add('is-invalid')
                validate.descuento = false
                break;
                case (this.value.trim() > 70 ):
                $('#errorDescuento').innerHTML = "El descuento no puede ser mayor al 50%"
                this.classList.add('is-invalid')
                validate.descuento = false
                break;
            default:
                $('#errorDescuento').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.descuento = true
                break;
        }
        funcValidate(validate)
    })
    
    /* IMAGEN */
    
    image.addEventListener('change', function () {
        switch (true) {
            case !regExExt.exec(image.value):
                $('#errorImagen').innerHTML = "Solo podes ingresar una imagen valida formato (const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/)"
                this.classList.add('is-invalid')
                validate.image = false
                break;
            default:
                $('#errorImagen').innerHTML = null
                validate.image = true
                break;
        }
        funcValidate(validate)
    })
    
    
    disponible.addEventListener('click', function () {
        switch (true) {
            case !(disponible.checked  ):
                $('#errorDisponible').innerHTML = "Debe asegurar la disponibilidad del producto"
                this.classList.add('is-invalid')
                validate.disponible = false
                break;
            default:
                $('#errorDisponible').innerHTML = null
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.disponible = true
                break;
        }
        funcValidate(validate)
    })


    /* Validacion */
    
    const validate = {
        categoria: false,
        nombreProducto: false,
        descripcion: false,
        precio: false,
        descuento: true,
        disponible: false,
        image: true,
    }
    funcValidate(validate)
})