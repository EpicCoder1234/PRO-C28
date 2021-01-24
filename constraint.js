class Line{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    display(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position;
            var pointB = this.constraint.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }   
    }
    fly(){
        this.constraint.bodyA=null;
    }
}