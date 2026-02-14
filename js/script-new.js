const gameCanvas=document.querySelector("#gameCanvas");
gameCanvas.width=window.innerWidth;
gameCanvas.height=window.innerHeight;
gameCanvas.style.background="purple";
const context=gameCanvas.getContext("2d");
class Player{
    constructor(){
        this.position={
            x:150,
            y:300
        }
        // this.velocity={
        //     x:0,
        //     y:1
        // }
        // this.width=20;
        // this.height=20;
    }
    draw(){
        context.fillStyle()
    }
}