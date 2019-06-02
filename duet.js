class obstacle
{
	constructor(code)
	{
		this.type=code;
		this.count=0;
		switch(code)
		{
         case 0:
          this.y=-30;
          this.x=333;
          this.w=200;
          this.h=30;
          break;
         case 1:
          this.y=-200;
          this.x=518;
          this.h=200;
          this.w=30;
          break;
         case 2:
          this.y=-30;
          this.x=533;
          this.h=30;
          this.w=200;
          break;

		}
	}
	col()
	{
		switch(this.type)
		{
			case 0:
		   	 if((rx<=533&&ry<=this.y+40&&ry>=this.y)||(px<=533&&py<=this.y+40&&py>=this.y))
		   	 	return 1;
		   	 else
		   	 	return 0;
		   	 break;
		   	case 1:
		   	 if((rx>=518&&rx<=548&&ry<=this.y+200&&ry>=this.y)||(px>=518&&px<=548&&py<=this.y+200&&py>=this.y))
		   	 	return 1;
		   	 else
		   	 	return 0;
		   	 break;
		   	case 2:
		   	 if((rx>=533&&ry<=this.y+40&&ry>=this.y)||(px>=533&&py<=this.y+40&&py>=this.y))
		   	 	return 1;
		   	 else
		   	 	return 0;
		   	 break;
		}
	}
}
var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var bg=new Image();
var ra=0,pa=Math.PI,rx,ry,px,py;
var s=0,i=0,k=1,spd=1;
var obs=[];
obs[0]=new obstacle(Math.floor(Math.random() * 3));
bg.src="https://images4.alphacoders.com/622/thumb-1920-622004.jpg";
draw();
document.addEventListener("keydown",logKey);
function logKey(e)
{
	if(e.key=="a")
	{
	 ra+=Math.PI/8;
     pa+=Math.PI/8; 
    }
    if(e.key=="d")
    {
	 ra-=Math.PI/8;
     pa-=Math.PI/8;
    }
}
function draw()
{
	ctx.drawImage(bg,0,0,1066,600);
	for(var j=0;j<obs.length;j++)
	{
	  if(j>0)
	   drawobs(obs[j].x,obs[j].y,obs[j].w,obs[j].h);
      obs[j].y+=spd;
      if(obs[obs.length-1].y>=200&&obs[obs.length-1].count==0)
      {
      	obs[obs.length-1].count++;
      	k=1;
      }
      if(k==1)
      {
        obs[j+1]=new obstacle(Math.floor(Math.random() * 3));
        k=0;
	  }       
	  //collision detection
	  if(j>0)
	  {
	   if(obs[j].col())
	   {
	    	location.reload();
	   }
	  }
	}
    obs[0].y+=spd;
	ctx.beginPath();
	ctx.arc(533,470,100,0,2*Math.PI);
	ctx.strokeStyle="white";
	ctx.stroke();
	phoebe(pa);
	rishav(ra);
	i++;
	if(i==50)
	{
		s++;
		i=0;
	}
	spd+=0.002;
	score(s);
	requestAnimationFrame(draw);
}
function rishav(ra)
{
 rx=533+100*Math.cos(ra);
 ry=470-100*Math.sin(ra);	
 ctx.beginPath();
 ctx.arc(rx,ry,10,0,2*Math.PI);
 ctx.fillStyle="red";
 ctx.fill();
}
function phoebe(pa)
{ 
 px=533+100*Math.cos(pa);
 py=470-100*Math.sin(pa);	 
 ctx.beginPath();
 ctx.arc(px,py,10,0,2*Math.PI);
 ctx.fillStyle="blue";
 ctx.fill();
}
function score(s)
{
	ctx.font="14px Oswald";
	ctx.fillStyle = "#D1C800";
	ctx.fillText("SCORE: " +s,950,20);
}
function drawobs(x,y,w,h)
{
 ctx.beginPath();
 ctx.rect(x,y,w,h);
 ctx.fillStyle="white";
 ctx.fill();
}