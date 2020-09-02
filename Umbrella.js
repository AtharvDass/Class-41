class Umbrella{
    constructor(){
        var options={isStatic:true}

        this.body=Bodies.circle(200,550,150,options);
        this.img=loadImage('um_img.jpg')
       // this.img.scale=0.5
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        
        image(this.img,200,550);
        
    }
}