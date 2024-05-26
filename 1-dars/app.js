let inps = document.querySelectorAll("input");
let img = document.querySelector("img")


inps.forEach((item)=>{
    item.addEventListener("change", ()=>{
        let i = item.dataset.vel;
        // switch (i) {
        //     case "erkak":
        //         img.src = "./img/men.png"
        //       break;
        //     case "ayol":
        //         img.src = "./img/giril.png"
        //       break;
        //     case "erkakvaayol":
        //         img.src = "./img/menvsgril.png"
        //       break;
        //       default:
        //         text = "......................";
        // }
        if(i == 'erkak') {
            img.src = "./img/men.png"
        } else if(i == "ayol"){
            img.src = "./img/giril.png"
        } else{
            img.src= "./img/menvsgril.png"
        }
    })
})