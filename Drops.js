class Drops{

    constructor(x, y, radius){

        var options = {

            'restitution' : 0.001,
            'friction' : 0.1

        }
        
        this.body = Bodies.circle(x, y, radius / 3, options);
        this.radius = radius;

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();

    }

    update(){

        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x : random(0, 400), y : random(0, 400)});

        }

    }

}