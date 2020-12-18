class bullet{
    constructor(x,y,r){
        var o={
            friction:3,
            density:2,
            restitution:0.5
        }
        this.x=x
        this.y=y
        this.r=r

        this.body=Bodies.circle(this.x,this.y,this.r/2,o)
        this.image=loadImage("c29pball.png")
        World.add(world,this.body)
    
    }
    display(){
        ellipseMode(RADIUS)
        imageMode(RADIUS)
        image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2)
    }
}