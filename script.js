function enviarFormulario()
{
 let nombre=document.getElementById("nombre").value
 let apellido=document.getElementById("apellido").value
 let fecha=document.getElementById("fecha").value
 let lugar=document.getElementById("lugar").value
  
alert(nombre+ "" +apellido + "" +fecha + "" +lugar)
  
 let datos = document.getElementById("datosRecuperados")

  datos.innerHTML = `
  El nombre capturados es: ${nombre}
  <br> 
  El apellido capturados es: ${apellido}
  <br>
  La fecha de nacimiento capturada es: ${fecha}
  <br>
  El lugar de nacimiento capturado es: ${lugar}
   `
}