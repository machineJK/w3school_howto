document.addEventListener("DOMContentLoaded",function(){
    let tabs_wrapper = document.getElementsByClassName("tabs_wrapper")[0];
    let tabs = document.getElementsByClassName("tabs");
    let tabs_contents = document.getElementsByClassName("tabs_content");

    tabs_wrapper.addEventListener("click",function(e){
        // console.log(e.target.classList);
        if(e.target.classList.contains("active")){
            return;
        }else{
            for(let i = 0; i < tabs.length; i++){
                tabs[i].classList.remove("active");
                tabs_contents[i].classList.remove("active");
            }
            e.target.classList.add("acitve");
            if(e.target.classList.contains("tab1")){
                document.getElementsByClassName("tab1_content")[0].classList.add("active");
            }else if(e.target.classList.contains("tab2")){
                document.getElementsByClassName("tab2_content")[0].classList.add("active");
            }else if(e.target.classList.contains("tab3")){
                document.getElementsByClassName("tab3_content")[0].classList.add("active");
            }
        }
    });
});