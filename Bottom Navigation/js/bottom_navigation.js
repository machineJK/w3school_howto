document.addEventListener("DOMContentLoaded",function(){
    let list = document.getElementsByClassName("list")[0];
    let container = document.getElementsByClassName("container")[0];

    list.addEventListener("click",function(){
        container.classList.toggle("responsive");
    });
});