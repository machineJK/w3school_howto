document.addEventListener("DOMContentLoaded",function(){
    // sidenav_overlay
    if(document.getElementsByClassName("btn_overlay")[0] != undefined){
        let overlay_container = document.getElementsByClassName("overlay_container")[0];
        let btn_overlay = document.getElementsByClassName("btn_overlay")[0];
        btn_overlay.addEventListener("click",function(){
            if(overlay_container.offsetWidth == 0){
                overlay_container.style.width = "250px";
            }else{
                overlay_container.style.width = "0px";
            }
        });
    }
    //sidenav overlay without animation
    if(document.getElementsByClassName("btn_overlay_without_animation")[0] != undefined){
        let overlay_without_animation_container = document.getElementsByClassName("overlay_without_animation_container")[0];
        let btn_overlay_without_animation = document.getElementsByClassName("btn_overlay_without_animation")[0];
        btn_overlay_without_animation.addEventListener("click",function(){
            overlay_without_animation_container.classList.toggle("active");
        });
    }
    //sidenav push width/opacity1
    if(document.getElementsByClassName("btn_push_width_opacity")[0] != undefined){
        let push_width_opacity = document.getElementsByClassName("push_width_opacity")[0];
        let btn_push_width_opacity = document.getElementsByClassName("btn_push_width_opacity")[0];
        let ctt = document.getElementsByClassName("ctt")[0];
        let bg_black = document.getElementsByClassName("bg_black")[0];
        let btn_cls = document.getElementsByClassName("btn_cls")[0];
        btn_push_width_opacity.addEventListener("click",function(){
            push_width_opacity.style.width = "250px";
            ctt.style.marginLeft = "250px";
            bg_black.style.display = "block";
            setTimeout(function(){
                bg_black.style.opacity = "0.5";
            },1);
        });
        btn_cls.addEventListener("click",function(){
            push_width_opacity.style.width = "0px";
            ctt.style.marginLeft = "0px";
            bg_black.style.opacity = "0";
            setTimeout(function(){
                bg_black.style.display = "none";
            },500);
        });
    }
    //sidenav push width/opacity2
    if(document.getElementsByClassName("btn_push")[0] != undefined){
        let btn_push = document.getElementsByClassName("btn_push")[0];
        let push_container = document.getElementsByClassName("push_container")[0];
        let btn_cls = document.getElementsByClassName("btn_cls")[0];
        let bg_black_push = document.getElementsByClassName("bg_black_push")[0];
        btn_push.addEventListener("click",function(){
            bg_black_push.classList.add("active");
            bg_black_push.style.animation = "fadeIn 0.5s";
            bg_black_push.style.animationFillMode = "forwards";
            push_container.style.animation = "widthOn 0.5s";
            push_container.style.animationFillMode = "forwards";
        });
        btn_cls.addEventListener("click",function(){
            bg_black_push.style.animation = "fadeOut 0.5s";
            bg_black_push.style.animationFillMode = "forwards";
            setTimeout(function(){
                bg_black_push.classList.remove("active");
            },500); 
            push_container.style.animation = "widthOff 0.5s";
            push_container.style.animationFillMode = "forwards";
        });
    }
    //sidenav push2 width/opacity3
    if(document.getElementsByClassName("btn_push2")[0] != undefined){
        let btn_push2 = document.getElementsByClassName("btn_push2")[0];
        let push2_container = document.getElementsByClassName("push2_container")[0];
        let bg_black_push2 = document.getElementsByClassName("bg_black_push2")[0];
        let ctt_push2 = document.getElementsByClassName("ctt_push2")[0];
        let btn_cls = document.querySelector(".push2_container .btn_cls");

        btn_push2.addEventListener("click",function(){
            bg_black_push2.classList.remove("displayNone");
            setTimeout(function(){
                bg_black_push2.classList.remove("opacityZero");
                push2_container.style.width = "250px";
                ctt_push2.style.marginLeft = "250px";
            },1);
        });
        btn_cls.addEventListener("click",function(){
            bg_black_push2.classList.add("opacityZero");
            push2_container.style.width = "0";
            ctt_push2.style.marginLeft = "0";
            bg_black_push2.addEventListener("transitionend",function(){
                bg_black_push2.classList.add("displayNone");
            },{once:true});
            
        });

    }
    //sidenav_fill_width
    if(document.getElementsByClassName("btn_full_width")[0] != undefined){
        let btn_full_width = document.getElementsByClassName("btn_full_width")[0];
        let push_full_width = document.getElementsByClassName("push_full_width")[0];
        let btn_cls_full_width = document.getElementsByClassName("btn_cls_full_width")[0];

        btn_full_width.addEventListener("click",function(){
            push_full_width.style.width = "100%";
        });
        btn_cls_full_width.addEventListener("click",function(){
            push_full_width.style.width = "0";   
        });
    }







});