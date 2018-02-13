var main=(function(){
	
	var canvas=document.getElementById('canvas'),
		radSpan=document.getElementById('radval');
	
	var context=canvas.getContext('2d');
	

	var radius=10;
	var drag=false;

	canvas.height=window.innerHeight;
	canvas.width=window.innerWidth;
	context.lineWidth=radius*2;

	var putPoint=function(e){
		console.log("boyeah");
		if(drag){
			context.lineTo(e.clientX,e.clientY);
			context.stroke();
			context.beginPath();
			context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
			context.fill();
			context.beginPath();
			context.moveTo(e.clientX,e.clientY)
		}
	}
	var engage=function(e){
		drag=true;
		putPoint(e);
	}

	var disengage=function(){
		context.beginPath();
		drag=false;
	}

	var setRadius=function(newRadius){
		var minRad=0,
		maxRad=100,
		defaultRad=20;
		newRadius=radius+newRadius;
		if(newRadius<minRad)
			newRadius=minRad;
		else if(newRadius>maxRad)
			newRadius=maxRad;
		radius=newRadius;
		context.lineWidth=radius*2;
		radSpan.innerHTML=radius;
	}
	
	var setColor=function(color){
		context.fillStyle=color;
		context.strokeStyle=color;
	}
	
	var erase=()=>{
		context.globalCompositeOperation = "destination-out";
		context.strokeStyle = "rgba(0,0,0,0)";
	}

	canvas.addEventListener('mousedown',engage);
	canvas.addEventListener('mouseup',disengage);
	canvas.addEventListener('mousemove',putPoint);

	pubsub.on('setRadius',setRadius);
	pubsub.on('setColor',setColor);
	pubsub.on('erase',erase);
	//return {context:context,canvas:canvas};
})();