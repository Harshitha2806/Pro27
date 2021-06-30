class Bob {
    constructor(x, y, r) {
      var options = {
          isStatic : false,
          restitution:0.3,
          friction:0,
          density:0.8
      }
     
     this.x=x;
      this.y=y;
      this.r=r;
      
      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
      World.add(world, this.body);
    }
    display(){

    
    var paperpos = this.body.position;
    push()
    translate (paperpos.x,paperpos.y);
    ellipseMode(RADIUS);
    fill(255,0,255)
    ellipse(0,0,this.r,this.r);
    pop ();
    
    
    }
  };
  
