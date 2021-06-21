document.addEventListener("DOMContentLoaded",function(){
    let uls = document.querySelectorAll(".item > ul");
    let wrapper = document.getElementsByClassName("wrapper")[0];

    wrapper.addEventListener("click",open_close);
    
    function open_close(e){
        let mybro = e.target.nextElementSibling;
        console.log(mybro.offsetHeight);

        // mybro.classList.toggle("active");

        let id = setInterval(frame,3);
        function frame(){
            if(mybro.offsetHeight == 114){
                clearInterval(id);
            }else{
                mybro.offsetHeight == 114;
            }
        }
    }

});







