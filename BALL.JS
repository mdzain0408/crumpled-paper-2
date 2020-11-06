class ball2 {

constructor(){
    var options = {
        'restitution':0.2,
        'friction':0.5,
        'density':1.0
        
        
        }
            
        this.body= Bodies.rectangle(400,0,20,20,options);
        this.width = 20
        this.height = 20;
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    



}

display(){
var pos = this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)

}

    
}