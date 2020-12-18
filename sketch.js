const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

const Constraint=Matter.Constraint;
var engine,world;

var ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27
var backimg;
var ground,groundimg;
var sli;
var base1,base1img,base2,base2img,base3,base3img;
var cir;
function preload(){
backimg=loadImage("c29img.jpg")
}

function setup(){
    var canvas=createCanvas(1200,600);
    engine=Engine.create();
    world=engine.world;

    box1=new box(340,350,60,60)
    box2=new box(400,350,60,60)
    box3=new box(460,350,60,60)
    box4=new box(520,350,60,60)
    box5=new box(580,350,60,60)
    box6=new box(380,300,60,60)
    box7=new box(420,300,60,60)
    box8=new box(460,300,60,60)
    box9=new box(520,300,60,60)
    box10=new box(410,250,60,60)
    box11=new box(450,250,60,60)
    box12=new box(460,250,60,60)
    box13=new box(420,180,60,60)
    box14=new box(460,180,60,60)
    box15=new box(440,120,60,60)
    box16=new box(800,120,60,60)
    box17=new box(840,150,60,60)
    box18=new box(900,150,60,60)
    box19=new box(950,150,60,60)
    box20=new box(820,100,60,60)
    box21=new box(860,100,60,60)
    box22=new box(900,100,60,60)
    box23=new box(830,70,60,60)
    box24=new box(870,70,60,60)
    box25=new box(850,10,60,60)
    cir=new bullet(200,200,20)
    sli=new slingshoot(cir.body,{x:150,y:200})
var gsta={
    isStatic:true
}
    ground=Bodies.rectangle(600,592,1200,20,gsta)
    groundimg=loadImage("c29b.jpg")
    World.add(world,ground)

    
        base1=Bodies.rectangle(450,402,350,40,gsta)
        base1img=loadImage("c29ba.png")
        World.add(world,base1)

        base2=Bodies.rectangle(900,272,350,40,gsta)
        base2img=loadImage("c29ba.png")
        World.add(world,base2)



}

function draw(){
    background(backimg);
    Engine.update(engine);
  
   
imageMode(CENTER)
image(groundimg,ground.position.x,ground.position.y,1200,20)

imageMode(CENTER)
image(base1img,base1.position.x,base1.position.y,350,50)

imageMode(CENTER)
image(base2img,base2.position.x,base2.position.y,350,50)



box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
cir.display()
sli.display()

}

function mouseDragged(){
Matter.Body.setPosition(cir.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
sli.fly();
}

function keyPressed(){
     if(keyCode===32){
         sli.attach(cir.body)
     }
}