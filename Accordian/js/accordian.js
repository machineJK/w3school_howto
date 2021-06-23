document.addEventListener("DOMContentLoaded",function(){
    let divs = document.getElementsByTagName("div");
    let section_boxes = document.getElementsByClassName("section_box");
    let pms = document.getElementsByClassName("pm");

    for(let i = 0; i < section_boxes.length; i++){
        section_boxes[i].addEventListener("click",function(){
            let bro = this.nextElementSibling;
            if(bro.offsetHeight == 0){
                console.log("scrollHeight : " + bro.scrollHeight);
                bro.style.height = bro.scrollHeight + "px";
                this.lastElementChild.textContent = "-";
            }else{
                console.log("scrollHeight : " + bro.scrollHeight);
                bro.style.height = "0";
                this.lastElementChild.textContent = "+";
            }
        });
    }
});






