class SnowFlake {

    constructor(x,y,r) {
        var options = {
            restitution: 0.4
         
        }
        this.r=r;
        this.image = loadImage("snowfall.webp");
        this.body = Bodies.circle(x,y,this.r,options)
       
        World.add(world,this.body);
    }
    display() {
      

        push()
        translate (pos.x , pos.y);
        rotate(angel);
        //imageMode(CENTER)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}