class Mango{
    constructor(x,y, diameter){
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':1.0
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.mangoimg = loadImage("mango.png");
        World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.mangoimg, 0,0, this.diameter);
        this.mangoimg.scale = -3;
        pop();
    }
}