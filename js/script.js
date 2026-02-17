const gameCanvas=document.getElementById("gameCanvas");
 gameCanvas.width=window.innerWidth;
 gameCanvas.height=window.innerHeight;
 gameCanvas.style.background="pink";
 const ctx=gameCanvas.getContext("2d");
const gravity=0.5;
// for player...
const keys={
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }

}
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
     if(this.position.y + this.height >= gameCanvas.height){
        this.velocity.y = 0;
        this.position.y = gameCanvas.height - this.height;
    } else {
        this.velocity.y += gravity;
    }
    // Right wall
    if(this.position.x + this.width >= gameCanvas.width){
        this.position.x = gameCanvas.width - this.width;
    }

    // Left wall
    if(this.position.x <= 0){
        this.position.x = 0;
    }

    }
 }


 class platform{
    constructor(x,y,width,height){
        this.position={
           x:x,
           y:y
    }
    this.width=width
    this.height=height;
 }
 draw(){
    ctx.fillStyle="brown";
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
 }
}
 // now players movement part 

 const player = new Player();
 const pf=new platform(500,window.innerHeight-100,50,100);
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,gameCanvas.width,gameCanvas.height);
    pf.draw();
 if(keys.right.pressed){
    player.velocity.x = 5;
}
else if(keys.left.pressed){
    player.velocity.x = -5;
}
else{
    player.velocity.x = 0;
}

    player.draw();
player.update();
   
}
animate();




// eventlistener
window.addEventListener("keydown",(event)=>{
    if(event.key==="ArrowRight"){
        keys.right.pressed=true;
    }
    if(event.key==="ArrowLeft"){
        keys.left.pressed=true;
    }
    if(event.key==="ArrowUp"){
        player.velocity.y=-11;
    }

});
window.addEventListener("keyup",(event)=>{
    if(event.key==="ArrowRight"){
        keys.right.pressed=false;
    }
    if(event.key==="ArrowLeft"){
        keys.left.pressed=false;
    }
});