class Rope{

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:250
            
        }

        this.rope = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.rope);
    }

    display(){
        
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB= this.pointB;
        fill("black");
        line(pointA.x,pointA.y, pointB.x,pointB.y);
        //line(pointB.x, pointB.y. pointA.x, pointA.y);
        
    }
        }

    fly(){

    this.rope.bodyA = null;

    }

    attach(mybody){
        this.rope.bodyA = mybody;
    }
}

/*class Rope{

    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }

        this.rope= Matter.Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.rope);
    }

    display(){
        var pointA =this.rope.bodyA.position;
        var pointB= this.pointB;
        push()
        fill("black");
        line(pointA.x,pointA.y, pointB.x,pointB.y);
        pop()
    }


    fly(){

        this.rope.bodyA = null;
    
        }
}*/