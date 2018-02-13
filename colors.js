var colorPallete=(()=>{
	var colours=['black','gray','white','violet','indigo','blue','green','yellow','orange','red'];
	
	var setListener=(()=>{
		for(var i=0,n=colours.length;i<n;i++)
		{
			var swatch=document.createElement('div');
			swatch.className='swatch';
			swatch.style.backgroundColor=colours[i];
			swatch.addEventListener('click',setSwatch);
			document.getElementById('colors').appendChild(swatch);
		}
	})

	var setColor=(color)=>{
		pubsub.emit('setColor',color);
		var active=document.getElementsByClassName('active')[0];
		if(active){
			active.className='swatch';
		}
	}

	var erase=()=>{
		context.globalCompositeOperation = "destination-out";
		context.strokeStyle = "rgba(0,0,0,0)";
	}

	var setSwatch=(e)=>{
		console.log("click");
		var swatch=e.target;
		col=swatch.style.backgroundColor;
		setColor(col);
		swatch.className+=' active';
	}
	setListener();
	setSwatch({target:document.getElementsByClassName('swatch')[0]});
})();