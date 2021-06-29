document.addEventListener("DOMContentLoaded",function(){
    let tabs_wrapper = document.getElementsByClassName("tabs_wrapper")[0];
    let tabs = document.getElementsByClassName("tabs");
    let tabs_contents = document.getElementsByClassName("tabs_content");

    tabs_wrapper.addEventListener("click",function(e){
        if(!e.target.classList.contains("active")){
            for(let i = 0; i < tabs.length; i++){
                tabs[i].classList.remove("active");
                tabs_contents[i].classList.remove("active");
            }
            e.target.classList.add("active");

            if(e.target.classList.contains("tab1")){
                tabs_contents[0].classList.add("active");
            }else if(e.target.classList.contains("tab2")){
                tabs_contents[1].classList.add("active");
            }else if(e.target.classList.contains("tab3")){
                tabs_contents[2].classList.add("active");
            }
        }
    });
});