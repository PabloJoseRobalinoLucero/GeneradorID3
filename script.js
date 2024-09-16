let cantidad = document.getElementById("cantidad")
let contrasena = document.getElementById("contrasena")
let seguridad = document.getElementsByClassName("seguridad")[0]

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function generar() {
    let numeroDigitado = parseInt(cantidad.value)
    let password = ""

    if (numeroDigitado < 6) {
        alert("La contraseña no puede tener menos de 6 caracteres.")
        textoSeguridad(
            "Aún no genera una contraseña.",
            "no-generada",
            ["segura", "insegura"]
        )
    } else {
        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]
            password += caracterAleatorio
        }
    }

    contrasena.value = password
    reconocerSeguridad(password)
}

function limpiar() {
    contrasena.value = ""
    textoSeguridad(
        "Aún no genera una contraseña.",
        "no-generada",
        ["segura", "insegura"]
    )
}

function reconocerSeguridad(pass) {
    let mayusculas = pass.match(/[A-Z]/g)
    let minusculas = pass.match(/[a-z]/g)
    let numeros = pass.match(/[0-9]/g)
    let caracteresEspeciales = pass.match(/[!@#$%^&*()]/g)

    if (pass.length >= 8 && mayusculas && minusculas && numeros && caracteresEspeciales) {
        textoSeguridad(
            "La contraseña generada es segura.",
            "segura",
            ["insegura", "no-generada"]
        )
    } else {
        textoSeguridad(
            "La contraseña generada no es segura. Debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.",
            "insegura",
            ["segura", "no-generada"]
        )
    }
}

function textoSeguridad (texto, claseAgregar, clasesEliminar) {
    seguridad.innerHTML = texto
    seguridad.classList.add(claseAgregar)
    clasesEliminar.forEach(clase => seguridad.classList.remove(clase))
}