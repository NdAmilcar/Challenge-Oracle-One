
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
//botones
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copy");
const btnClear = document.getElementById("btn-clear");

//inputs
const inputTexto = document.getElementById("input-texto");
const msg = document.getElementById("msg");
//funciones
function encriptar(texto) {
 //VALIDAR QUE SOLO SE INGRESE LETRAS MINUSCULAS Y NO ACENTUACION
    if (texto.match(/[^a-z]/)) {
        return alert("Solo se permiten letras minusculas y sin acentos");
    }
    let textoEncriptado = "";
        for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        switch (letra) {
        case "e":
            textoEncriptado += "enter";
            break;
        case "i":
            textoEncriptado += "imes";
            break;
        case "a":
            textoEncriptado += "ai";
            break;
        case "o":
            textoEncriptado += "ober";
            break;
        case "u":
            textoEncriptado += "ufat";
            break;
        default:
            textoEncriptado += letra;
            break;
        }
    }
    return textoEncriptado;
    }

function desencriptar(texto) {
    let textoDesencriptado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        switch (letra) {
        case "enter":
            textoDesencriptado += "e";
            break;
        case "imes":
            textoDesencriptado += "i";
            break;
        case "ai":
            textoDesencriptado += "a";
            break;
        case "ober":
            textoDesencriptado += "o";
            break;
        case "ufat":
            textoDesencriptado += "u";
            break;
        default:
            textoDesencriptado += letra;
            break;
        }
    }
    return textoDesencriptado;
}
//eventos
btnEncriptar.addEventListener("click", () => {
    //prevent
    event.preventDefault();
    let msg = document.getElementById("msg");
    let texto = inputTexto.value;
    let textoEncriptado = encriptar(texto);
    console.log(textoEncriptado);
    //mostrar en el input msg
    msg.value = textoEncriptado;
}
);
btnDesencriptar.addEventListener("click", () => {
    event.preventDefault();
    let msg = document.getElementById("msg");
    let texto = inputTexto.value;
    let textoDesencriptado = desencriptar(texto);
    console.log(textoDesencriptado);
    msg.value = textoDesencriptado;
}
);
//copiar al portapapeles
btnCopiar.addEventListener("click", () => {
    event.preventDefault();
    let msg = document.getElementById("msg");
    msg.select();
    document.execCommand("copy");
}
);
//limpiar
btnClear.addEventListener("click", () => {
    //prevent
    event.preventDefault();
    let msg = document.getElementById("msg");
    msg.value = "";
}
);
