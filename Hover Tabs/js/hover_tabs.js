document.addEventListener("DOMContentLoaded",function(){
    let tabs = document.getElementsByClassName("tabs");
    let contents = document.getElementsByClassName("contents");

    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("mouseover",function(){
            if(!tabs[i].classList.contains("active")){
                for(let j = 0; j < tabs.length; j++){
                    tabs[j].classList.remove("active");
                    contents[j].classList.remove("active");
                }
                tabs[i].classList.add("active");
                contents[i].classList.add("active");
            }
        });

        // tabs[i].addEventListener("mouseout",function(){
        //     if(tabs[i].classList.contains("active")){
        //         tabs[i].classList.remove("active");
        //         contents[i].classList.remove("active");
        //     }

        //     if(i != 0){
        //         tabs[0].classList.add("active");
        //         contents[0].classList.add("active");
        //     }
        // });
    }
});