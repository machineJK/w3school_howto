//Javascript
document.addEventListener("DOMContentLoaded",function(){
    let container = document.getElementsByClassName("container")[0];
    let lines = document.getElementsByClassName("line");
    container.addEventListener("click",function(){
        for(let i = 0; i < lines.length; i++){
            lines[i].classList.toggle("active");
        }
        console.log("aaa");
    });
});

//jQuery
// $(function(){
//     // console.log($(".line1"));
//     $(".container").click(function(){
//         $(".line").toggleClass("active");
//     });
// });















