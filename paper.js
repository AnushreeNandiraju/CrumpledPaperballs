class Paper{
    constructor(x,y,radius){
        var options= {
            restitution: 0.7,
            friction: 0.5,
            density: 1
        }
       this.x=x;
       this.y=y;
       this.radius = radius
        this.paper = Bodies.circle(this.x,this.y, this.radius/2, options);
        World.add(world,this.paper); 
    }
    display(){
        var paperPos = this.paper.position;
        push();
       translate(paperPos.x,paperPos.y);
        fill("white");
        noStroke();
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}