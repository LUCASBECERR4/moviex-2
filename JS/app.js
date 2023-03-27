var check = document.querySelector(".check");
const btnSwitch = document.querySelector('#switch')

check.addEventListener('click', idioma);

function idioma(){
    let id = check.checked;
    if(id ==true){
        location.href="es/index.html"
    }else{
        location.href="../index.html"
    }
}

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})