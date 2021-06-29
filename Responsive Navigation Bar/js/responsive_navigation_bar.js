document.addEventListener("DOMContentLoaded",function(){
    let tabs = document.getElementsByClassName("tabs");
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click",function(){
            for(let j = 0; j < tabs.length; j++){
                tabs[j].classList.remove("active");
            }
            tabs[i].classList.add("active");
        });
    }

    let mob = document.getElementsByClassName("mob")[0];
    mob.addEventListener("click",function(){
        for(let i = 1; i < tabs.length; i++){
            if(tabs[i].style.display == "none" || tabs[i].style.display == ""){
                // console.log(typeof tabs[i].style.display);
                tabs[i].style.display = "block";
            }else{
                tabs[i].style.display = "none";
            }
            // console.log(tabs[i].style.display);
        }


    });

});