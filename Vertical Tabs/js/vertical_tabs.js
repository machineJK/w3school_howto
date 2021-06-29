document.addEventListener("DOMContentLoaded", function(){
    let tabs = document.getElementsByClassName("tabs");
    let tabs_content = document.getElementsByClassName("tabs_content");
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click",function(){
            if(!tabs[i].classList.contains("active")){
                for(let j = 0; j < tabs.length; j++){
                    tabs[j].classList.remove("active");
                }
                tabs[i].classList.add("active");

                for(let j = 0; j < tabs_content.length; j++){
                    tabs_content[j].classList.remove("active");
                }
                tabs_content[i].classList.add("active");
                


            }
        });
    }
});