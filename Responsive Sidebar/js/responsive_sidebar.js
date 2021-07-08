document.addEventListener("DOMContentLoaded",function(){
    let menu = document.querySelectorAll(".container li a");
    for(let i = 0; i < menu.length; i++){
        menu[i].addEventListener("click",function(){
            for(let j = 0; j < menu.length; j++){
                menu[j].classList.remove("active");
            }
            menu[i].classList.add("active");
        });
    }

});