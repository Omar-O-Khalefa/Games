import {uii} from "./ui.module.js";

export class getgames {

   chngcat = `mmorpg`
   glolist = []
   getdata = async  (chngcat = "mmorpg") => {
      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Key': 'e697bc32e7msha57f597cdd30dc7p17fd01jsn56e26d54e918',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
         }};

      const api = await fetch(` https://free-to-play-games-database.p.rapidapi.com/api/games?category=${chngcat}`, options)
      const response = await api.json()
      this.glolist = await response
      console.log(this.glolist);


      new uii().displyGamesdata(this.glolist)
document.querySelectorAll(".nav-link").forEach((el)=>{
   el.addEventListener("click",(e)=>{
      
      chngcat = $(e.target).attr("category")
      console.log(chngcat);
      $(e.target).addClass("active")
      $(e.target).parent().siblings().find(`a`).removeClass("active")

      
   this.getdata(chngcat);
})

})
   }

   
}












// $(".nav-link").click(function () {

//    this.chngcat = $(this).attr("category")
//    $(this).addClass("active")
//    $(this).parent().siblings().find(`a`).removeClass("active")
//    getdata()


// })
