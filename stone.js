class Stone{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("images/stone.png")
        this.body = Matter.Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.diameter,this.diameter);
    }
}