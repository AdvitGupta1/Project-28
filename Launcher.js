class Launcher{
    constructor(bodyA,pointB){
      var options={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.004,
          length: 10
      }  
      this.bodyA=bodyA;
      this.pointB=pointB;
      this.connecter=Constraint.create(options);
      World.add(world,this.connecter);
    }

    display(){
        var pointA=this.connecter.bodyA.position;
        var pointB=this.pointB;
        push()
        stroke(0);
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop()
    }
}