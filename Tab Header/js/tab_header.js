document.addEventListener("DOMContentLoaded",function(){
    let tabs = document.getElementsByClassName("tabs");
    let tabs_content = document.getElementsByClassName("tabs_content");

    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click",function(){
            for(let j = 0; j < tabs_content.length; j++){
                tabs_content[j].style.display = "none";
                tabs[j].style.color = "#000";
                tabs[j].style.backgroundColor = "#ddd";
                tabs[j].classList.remove("noactive");
            }
            tabs_content[i].style.display = "block";
            tabs[i].style.color = "#fff";
            tabs[i].classList.add("noactive");
            if(i == 0){
                tabs[i].style.backgroundColor = "#f44336";
            }else if(i == 1){
                tabs[i].style.backgroundColor = "#04AA6D";
            }else if(i == 2){
                tabs[i].style.backgroundColor = "#2196F3";
            }else if(i == 3){
                tabs[i].style.backgroundColor = "#ff5722";
            }
        });
    }

});