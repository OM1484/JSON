class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Alpha=255
  }
display(){
  if(this.body.speed<3){
    super.display()
  }else{
    World.remove(world,this.body)
    push()
    this.Alpha=this.Alpha-5
    tint(255,this.Alpha)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
  }
}
update(){
if(this.Alpha<0&&this.Alpha>-1005){
  score++
}
}
};