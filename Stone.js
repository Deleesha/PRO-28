class Stone {

    constructor(x,y){

        var stone_options = {
            restitution : 0.5 , density : 1.5, isStatic : false
        }

        this.body = Bodies.rectangle(x,y,50, 50 , stone_options);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.image = loadImage("Pluckingmangoes/stone.png");
        World.add(world,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("red"); 
        image(this.image,0, 0,this.width,this.height);
        pop();
    }



}


