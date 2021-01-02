class SlingShot{
    constructor(b1,pointB){
        var option = {
            bodyA: b1,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = pointB;
        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    
    }
    display(){

        if(this.sling.bodyA){
        var point1 = this.sling.bodyA.position;
        var point2 = this.pointB;

        strokeWeight(5);
        line(point1.x, point1.y, point2.x, point2.y);

    }
        }
        

    fly(){
        this.sling.bodyA = null;
    }
}