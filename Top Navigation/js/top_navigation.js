document.addEventListener("DOMContentLoaded",function(){
    let a_tags = document.getElementsByTagName("a");
    let ul_tag = document.getElementsByTagName("ul")[0];

    ul_tag.addEventListener("click",function(e){
        for(let i = 0; i < a_tags.length; i++){
            a_tags[i].classList.remove("active");
            console.log("aaa");
        }
        e.target.classList.add("active");
    });
});