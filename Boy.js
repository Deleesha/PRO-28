/*class Boy {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.bodyA = bodyA;
        this.boy = Matter.Constraint.create(options);
        this.image = loadImage("Pluckingmangoes/boy.png");
        World.add(world, this.boy);
    }

    display(){

        if(this.boy.bodyA){

            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            image(this.image,0,0,this.width,this.height);
         }
         
    }
    

    fly(){

    this.boy.bodyA = null;

    }
}*/


class Boy {

    constructor(x,y,width,height){

        var box_options = {
             friction : 0.8  , isStatic : true, density:2
        }

        this.body = Bodies.rectangle(x,y,width, height, box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Pluckingmangoes/boy.png");
        World.add(world,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);   
        rotate(angle);
        image(this.image,0,0,this.width*10,this.height*10);
        pop();
    }



}