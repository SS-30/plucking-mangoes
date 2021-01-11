class Boy{
    constructor(x,y,height,width){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1
          }

          this.body=Bodies.circle(x,y,radius,options)
          this.x=x
          this.y=y
          this.hight=height
          this.weight=weight
          World.add(world,this.body)

    }
}