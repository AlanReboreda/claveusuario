let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("usuario");
let dato2 = document.getElementById("clave");
btnEnv.addEventListener("click", () => {

  let usuario: string = ""
let clave: string = ""

let usuarioingresado: string = usuario.value
let claveingresada: string = clave.value 
if(usuario == usuarioingresado && clave == claveingresada){
  console.log("ingreso de usuario")
}else{
  console.log("usuario incorrecto")
}

}
