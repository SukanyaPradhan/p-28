class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
					
			}
		this.mango = loadImage('mango.png');
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
        
	}
	display()
	{
       
			var mangopos=this.body.position;		

			push()
			translate(mangopos.x, mangopos.y);
			rotate(this.body.angle);
      		//rectMode(CENTER)
      		//stroke(255)
			//strokeWeight(3);
			fill(0,0,255);
		//	ellipse(0,0,this.r,this.r);
			imageMode(CENTER);
			//ellipseMode(CENTER);
			image(this.mango,0,0,this.r*2,this.r*2)
			pop()
			
	}

}
