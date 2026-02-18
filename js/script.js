//1. Project Setup
// Html->canvas, css
// javascript reference
// canvas setting and obtaining context
//2. Player setup, 
//3. Velocity y
//4. gravity
//5. Movement 
//6. Platform
const gravity=0.5;
const speed=2;

const gameCanvas=document.querySelector("#gameCanvas");
gameCanvas.width=window.innerWidth;
gameCanvas.height=window.innerHeight;
gameCanvas.style.background="pink";
const keys={
    right:false,
    left:false
}
const context=gameCanvas.getContext("2d");
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
        this.width=20;
        this.height=20;
    }
    draw()
    {
        context.fillStyle="black";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){

        this.position.y+=this.velocity.y;
        this.position.x+=this.velocity.x;

        if(this.position.y+this.height+this.velocity.y>=window.innerHeight)
            this.velocity.y=0;
        else
            this.velocity.y+=gravity;


        this.draw();
    }
}
class Platform
{
    constructor(x,y,width,height)
    {
        this.position={
            x:x,
            y:y
        }
        this.width=width;
        this.height=height;
    }
    draw()
    {
        context.fillStyle="brown";
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
}
const player=new Player();
player.draw();
const platform=new Platform(350,window.innerHeight-100,50,100);
//const platform=new Platform(350,window.innerHeight-100,100,20);
platform.draw();


function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0,0,window.innerWidth,window.innerHeight);

    
    platform.draw();
    player.update();

    if(keys.right && player.position.x<=800)
        player.velocity.x=speed;
    else if(keys.left && player.position.x>=180)
        player.velocity.x=-speed;
    else 
        player.velocity.x=0;

    if(player.position.x+player.width>=platform.position.x &&
        player.position.x<=platform.position.x+platform.width &&
        player.position.y+player.height>=platform.position.y &&
        player.position.y<=platform.position.y+platform.height
    )
        player.velocity.x=0;

    if(player.position.y+player.height+player.velocity.y>=platform.position.y && player.position.x+player.width>=platform.position.x &&
        player.position.x<=platform.position.x+platform.width 

    )
        player.velocity.y=0;


}
animate();

addEventListener("keydown",(e)=>{
    //console.log(e);
    if(e.key=="ArrowRight")
        keys.right=true;
       // player.velocity.x=speed;
     if(e.key=="ArrowLeft")
         keys.left=true;
        //player.velocity.x=-speed;
    if(e.key=="ArrowUp")
        player.velocity.y=-11;
})

addEventListener("keyup",(e)=>{
    //console.log(e);
    if(e.key=="ArrowRight")
        keys.right=false;
       // player.velocity.x=0;
    if(e.key=="ArrowLeft")
        keys.left=false;
        //player.velocity.x=0;
})