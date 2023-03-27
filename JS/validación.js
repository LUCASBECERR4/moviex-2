"use strict";


//
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password =document.getElementById("password");
let form =document.getElementById("form");
let parrafo =document.getElementById("warnings");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML="";
    if(nombre.value.length<3){
        warnings += "El nombre no es valido <br>";
        entrar = true;
    };


    if(apellidos.value.length<3){
        warnings += "Los apellidos no son  validos <br>";
        entrar = true;
    };


    if(phone.value.length<9){
        warnings += "El número de teléfonon no es valido <br>";
        entrar = true;
    };

    if(!regexEmail.test(email.value)){
        warnings += "El email no es valido <br>";
        entrar = true;
    }

    if(password.value.length<5){
        warnings += "La contraseña es demasiado corta <br>";
       entrar=true;
    }

    if(entrar){
        parrafo.style.color="red";
        parrafo.innerHTML=warnings;
    }

});



