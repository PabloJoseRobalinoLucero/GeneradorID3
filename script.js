let cantidad = document.getElementById("cantidad")
let contrasena = document.getElementById("contrasena")

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function generar() {
    let numeroDigitado = parseInt(cantidad.value)
    let password = ""

    if (numeroDigitado < 6) {
        alert("La contraseña no puede tener menos de 6 caracteres.")
    } else {
        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]
            password += caracterAleatorio
        }
    }

    contrasena.value = password
}
