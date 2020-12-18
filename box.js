class box{
    constructor(x,y,width,height){
       var opt={
           dencity:2,
       }
        this.body=Bodies.rectangle(x,y,width,height,opt)
        this.width=width;
        this.height=height;
         this.image=loadImage("c29 box (2).png")
      this.visibilty=255;
        World.add(world,this.body)

    }
    display(){
        if(this.body.speed<6){
            fill(255)
            var pos=this.body.position
            var angle=this.body.angle
            push()
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER)
            image(this.image,0,0,this.width,this.height)
            pop()
        }
        else{
            World.remove(world,this.body)
        fill(255)
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       this.visibilty=this.visibilty-5
       tint(255,this.visibilty)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
        }
    }
}