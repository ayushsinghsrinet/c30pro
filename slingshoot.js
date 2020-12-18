class slingshoot{
constructor(bodyA,pointB){

var ot={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.1,
    length:100
}
this.sling=Constraint.create(ot)
World.add(world,this.sling)
}
fly(){
    this.sling.bodyA=null;
}
attach(body){
    Matter.Body.setPosition(cir.body,{x:150,y:200})
    this.sling.bodyA=body
}
display(){
    if(this.sling.bodyA){
    fill(0)
    var bodya=this.sling.bodyA.position
    var pointb=this.sling.pointB
    line(bodya.x,bodya.y,pointb.x,pointb.y)
}
}
}