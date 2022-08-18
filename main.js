let btnRegistrar=document.getElementById("registrar");
btnRegistrar.addEventListener("click", verificar);
//profe si dejo habilitado el preventDefault la pagina no funciona, por eso lo deje asi como esta//
function verificar(){
   e.preventDefault();
    let nombre=document.getElementById("nombre").value;
    let contraseña=document.getElementById("contra").value;
    
    let confirmar= document.getElementById("confirm").value
    
    if (contraseña==confirmar){
    let p = document.createElement("p")
    p.innerText=`Bienvenido, ${nombre}`;
    document.body.append(p);
    }
    else{
        alert("La confirmacion de su contraseña es incorrecta, por favor vuelva a intentarlo")
    }
    
}
