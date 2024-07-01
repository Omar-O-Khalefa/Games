import { gamedetailss } from "./getgameditals.module.js";

// ---------------------displygamelList----------------
export class uii {
   displyGamesdata(gameslits) {


      let temp = ""
      for (let i = 0; i < gameslits.length; i++) {

         temp += `
     <div class="col">
     <div  game-id="${gameslits[i].id}"    class="card h-100 bg-transparent" role="button" >
        <div class="card-body">
           <figure class="position-relative">
              <img class="card-img-top object-fit-cover " src="${gameslits[i].thumbnail}">
           
           </figure>
     
           <figcaption>
     
              <div class="hstack justify-content-between">
                 <h3 class="h6 small text-white">${gameslits[i].title}</h3>
                 <span class="badge text-bg-primary p-2">Free</span>
              </div>
     
              <p class="card-text small text-white text-center opacity-50">
              ${gameslits[i].short_description.split(" ", 8)}
              </p>
     
           </figcaption>
        </div>
     
        <footer class="card-footer small hstack justify-content-between">
     
           <span class="badge badge-color">${gameslits[i].genre}</span>
           <span class="badge badge-color">${gameslits[i].platform}</span>
     
        </footer>
     </div>
     </div>
     
     `
       
         document.getElementById("gameData").innerHTML = temp;

         document.querySelectorAll(".card").forEach((el) => {
            el.addEventListener("click", function () {
             this.glopIdgame = $(this).attr("game-id")
               console.log(this.glopIdgame);

              
               new gamedetailss().getDetails(this.glopIdgame)
               
               document.querySelector(".games").classList.add("d-none");
               document.querySelector(".details").classList.remove("d-none");
            });


         });

      }
   }
   // ---------------------displygameDetails----------------

   displayDetails(glolistDetails) {
      const content = `
        <div class="col-md-4 text-white">
        <img src="${glolistDetails.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8 text-white">
        <h3 class"text-white">Title: ${glolistDetails.title}</h3>
        <p class"text-white">Category: <span class="badge text-white text-bg-info"> ${glolistDetails.genre}</span> </p>
        <p class"text-white">Platform: <span class="badge text-white text-bg-info"> ${glolistDetails.platform}</span> </p>
        <p class"text-white">Status: <span class="badge text-white text-bg-info"> ${glolistDetails.status}</span> </p>
        <p class="small text-white">${glolistDetails.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${glolistDetails.game_url}">Show Game</a>
     </div>
     
        `;


      document.getElementById("detailsContent").innerHTML = content;
   }










}