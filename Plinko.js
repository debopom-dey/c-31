class Plinko{
    constructor(x,y,r){
    var options={
        restituition:0.4,
        isStatic:true,
    }
    this.r=10
    this.body=Bodies.circle(x,y,this.r,options);
   
    World.add(world,this.body)
    }
    display(){
    var pos= this.body.position;
 
    push();
    translate(pos.x,pos.y)
    //rotate(angle);
    fill(255,255,255)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop();
    
    
    }
    }