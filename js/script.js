const gameCanvas=document.getElementById("gameCanvas");
 gameCanvas.width=window.innerWidth;
 gameCanvas.height=window.innerHeight;
 gameCanvas.style.background="pink";
 const ctx=gameCanvas.getContext("2d");
const gravity=0.5;
 class Player{
    constructor(){
        this.position={
            x:150,
            y:300
        }
        this.velocity={
            x:0,
            y:1
        }
        this.width=20,
        this.height=20;
    }
    draw(){
        ctx.fillStyle="black";
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    } 
    update(){
        this.position.y+=this.velocity.y;
        this.position.x+=this.velocity.x;
        if(this.position.y+this.height+this.velocity.y>=window.innerHeight){
            this.velocity.y=0;
            //   window.location.reload();
        }
        else{
            this.velocity.y+=gravity;
        }
    }
 }
 const player = new Player();
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,gameCanvas.width,gameCanvas.height);
    player.draw();
player.update();
   
}
animate();