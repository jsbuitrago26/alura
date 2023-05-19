const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");
const btn_copiar=document.getElementById("btnCopiar");
const infMensaje=document.getElementById("msjAdvertecia");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
/*const depurarEntrada = (value) => {
    const valor = value.toLowerCase();
    const regex = /[^a-z\s]/gi;
    return valor.replace(regex, "");
}
*/
function depurarEntrada(mensaje){
    const valor = mensaje.toLowerCase();
    const regex = /[^a-z\s]/gi;
    return valor.replace(regex, "");
}

textArea.addEventListener('input', () => {
    textArea.value = depurarEntrada(textArea.value);      
   
})
function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    
    
    
    for(let i=0; i<matrizCodigo.length;i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
function btnEncriptar(){

   if(textArea.value.length==0){
    alert("Debes Ingresar un texto")
   } else{
    
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage= "none";
    infMensaje.style.display="none";
    btn_copiar.style.display="block"
   }
   
}

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();
    for(let i=0; i<matrizCodigo.length;i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
function btnDesencriptar(){
    
    if(textArea.value.length==0){
        alert("Debes Ingresar un texto")
       } else{
        
        const textoDesencriptado=desencriptar(textArea.value);
        mensaje.value=textoDesencriptado;
        textArea.value="";

        mensaje.style.backgroundImage= "none";
        infMensaje.style.display="none";
        btn_copiar.style.display="block"
       }
}

function btncopiar(){
    let mensajeCopiar=mensaje.value;
    navigator.clipboard.writeText(mensajeCopiar);
   
}