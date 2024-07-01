import { uii } from "./ui.module.js";

export class gamedetailss{
    glopIdgame = []
    async getDetails(glopIdgame) {
       const options = {
          method: "GET",
          headers: {
             "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
             "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
       };
       const apiDetails = await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${glopIdgame}`, options)
    
       const responseDetails = await apiDetails.json()
       this.glolistDetails = await responseDetails
       console.log(this.glolistDetails );
    
     
       new uii().displayDetails(this.glolistDetails)
       
    
    }
}
