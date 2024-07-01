
import{getgames} from "./getgames.module.js"


new getgames().getdata()

//--------------------buttons---------------------
$("#btnClose").click(function(){
   document.querySelector(".games").classList.remove("d-none");
   document.querySelector(".details").classList.add("d-none");

})

// $(".nav-link").click(function () {

//    chngcat = $(this).attr("category")
//    $(this).addClass("active")
//    $(this).parent().siblings().find(`a`).removeClass("active")
//    getdata()


// })




 









