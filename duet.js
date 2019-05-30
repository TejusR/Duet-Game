var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var bg=new Image();
var ra=0,pa=Math.PI;
bg.src="https://images4.alphacoders.com/622/thumb-1920-622004.jpg";
draw();
document.addEventListener("keypress",logKey);
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
	ctx.beginPath();
	ctx.arc(533,470,100,0,2*Math.PI);
	ctx.strokeStyle="white";
	ctx.stroke();
	phoebe(pa);
	rishav(ra);
	requestAnimationFrame(draw);
}
function rishav(ra)
{
 var x,y;
 x=533+100*Math.cos(ra);
 y=470-100*Math.sin(ra);	
 ctx.beginPath();
 ctx.arc(x,y,10,0,2*Math.PI);
 ctx.fillStyle="red";
 ctx.fill();
}
function phoebe(pa)
{ 
 x=533+100*Math.cos(pa);
 y=470-100*Math.sin(pa);	 
 ctx.beginPath();
 ctx.arc(x,y,10,0,2*Math.PI);
 ctx.fillStyle="blue";
 ctx.fill();
}
