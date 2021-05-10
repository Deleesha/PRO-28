/*class Mango {

    constructor(x,y,radius){

        var ball_options = {
            restitution : 0.5 , density : 1.5 , isStatic : true
        }

        this.body = Bodies.circle(x,y,30,ball_options);
        this.radius = 30;
        this.x = x;
        this.y = y;
        this.image = loadImage("Pluckingmangoes/mango.png");
        World.add(world,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("purple"); 
        image(this.image ,0,0,this.radius);
        pop();
    }



}*/

class Mango {

    constructor(x,y,width,height){

        var box_options = {
            restitution : 1 , friction : 0.8 , isStatic : true
        }

        this.body = Bodies.rectangle(x,y,50,50,box_options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Pluckingmangoes/mango.png")
        World.add(world,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("green"); 
        image(this.image,0, 0,this.width,this.height);
        pop();
    }



}