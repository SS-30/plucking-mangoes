class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1
          }
          this.body=Bodies.circle(x,y,radius,options)
          this.x=x
          this.y=y
          this.radius=radius
          World.add(world,this.body)
          this.image = loadImage("sprite/mango.png")

    }
     display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        mage(this.image,this.body.position.x,this.body.position.y,50)
        pop()
     }
}