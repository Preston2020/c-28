class Stone{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.stonesimg = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.stonesimg, 0,0,this.diameter);
        this.stonesimg.scale = 0.5;
        pop();
    }
}