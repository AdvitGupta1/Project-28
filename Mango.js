class Mango{
    constructor(x,y,radius){
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.image=loadImage("mango.png")
    this.body=Bodies.circle(x, y,radius, options);
    World.add(world,this.body);
    }

    display(){
        push()
        image(this.image,this.x,this.y,50,50);
        pop()
    }
}