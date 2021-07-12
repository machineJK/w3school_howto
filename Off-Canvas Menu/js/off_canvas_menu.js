document.addEventListener("DOMContentLoaded",function(){
    let btn_openOff = document.getElementsByClassName("btn_openOff")[0];
    let btn_cls_openOff = document.querySelector(".container_openOff .btn_cls");
    // Open Off-Canvas Menu
    btn_openOff.addEventListener("click",function(){
        let container_openOff = document.getElementsByClassName("container_openOff")[0];
        let content = document.getElementsByClassName("content")[0];
        container_openOff.style.width = "250px";
        content.style.marginLeft = "250px";
    });
    btn_cls_openOff.addEventListener("click",function(){
        let container_openOff = document.getElementsByClassName("container_openOff")[0];
        let content = document.getElementsByClassName("content")[0];
        container_openOff.style.width = "0";
        content.style.marginLeft = "0";
    });

    let btn_wOpacity = document.getElementsByClassName("btn_wOpacity")[0];
    let btn_cls_wOpacity = document.querySelector(".container_wOpacity .btn_cls");

    btn_wOpacity.addEventListener("click",function(){
        let container_wOpacity = document.getElementsByClassName("container_wOpacity")[0];
        let content = document.getElementsByClassName("content")[0];

        container_wOpacity.style.width = "250px";
        content.style.marginLeft = "250px";
        content.style.backgroundColor = "gray";
    });
    btn_cls_wOpacity.addEventListener("click",function(){
        let container_wOpacity = document.getElementsByClassName("container_wOpacity")[0];
        let content = document.getElementsByClassName("content")[0];

        container_wOpacity.style.width = "0";
        content.style.marginLeft = "0";
        content.style.backgroundColor = "#fff";
        
    });


});