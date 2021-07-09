document.addEventListener("DOMContentLoaded", function(){
    let btn_slide_right = document.getElementsByClassName("btn_slide_right")[0];
    let btn_cls_right = document.querySelector(".slide_right .btn_cls");

    let btn_slide_down = document.getElementsByClassName("btn_slide_down")[0];
    let btn_cls_down = document.querySelector(".slide_down .btn_cls");

    let btn_slide_no_animation = document.getElementsByClassName("btn_slide_no_animation")[0];
    let btn_cls_ani = document.querySelector(".slide_no_animation .btn_cls");

    // slide_right
    btn_slide_right.addEventListener("click",function(){
        let slide_right = document.getElementsByClassName("slide_right")[0];
        slide_right.style.display = "block";
        setTimeout(function(){
            slide_right.style.width = "100%";
        },1);
    });
    btn_cls_right.addEventListener("click",function(){
        let slide_right = document.getElementsByClassName("slide_right")[0];
        slide_right.style.width = "0";
        slide_right.addEventListener("transitionend",function(){
            slide_right.style.display = "none";
        },{once:true});
    });

    // slide_down
    btn_slide_down.addEventListener("click",function(){
        let slide_down = document.getElementsByClassName("slide_down")[0];
        slide_down.style.display = "block";
        setTimeout(function(){
            slide_down.style.height = "100%";
        },1);
    });
    btn_cls_down.addEventListener("click",function(){
        let slide_down = document.getElementsByClassName("slide_down")[0];
        slide_down.style.height = "0";
        btn_cls_down.addEventListener("transitionend",function(){
            slide_down.style.display = "none";
        },{once:true});
    });
    // slide_no_animation
    btn_slide_no_animation.addEventListener("click",function(){
        let slide_no_animation = document.getElementsByClassName("slide_no_animation")[0];
        slide_no_animation.style.display = "block";
    });
    btn_cls_ani.addEventListener("click",function(){
        let slide_no_animation = document.getElementsByClassName("slide_no_animation")[0];
        slide_no_animation.style.display = "none";
    });








    

});