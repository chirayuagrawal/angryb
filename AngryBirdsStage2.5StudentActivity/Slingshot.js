class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
       bodyA:bodyA, 
       bodyB:bodyB,
       stiffness:0.03,
       length:10  
    } 
    this.Sling=Constraint.create(options)
    World.add(world, this.Sling);
}
  display(){
      var pointA=this.Sling.bodyA.position
      var pointB=this.Sling.bodyB.position
      line (pointA.x,pointA.y,pointB.x,pointB.y)
  }

  


}