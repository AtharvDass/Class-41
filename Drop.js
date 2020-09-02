class Drop{
    constructor(x,y){
        var options={
            friction:0.1,
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,2,options);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill('blue')
        ellipse(0,0,4);
        pop()
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,700)})
        }
    }

}