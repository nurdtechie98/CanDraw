var saveButton=(()=>{
	var saveImage=()=>{
		var link = document.createElement('a');
		link.href=canvas.toDataURL();
		link.download = "myDrawIt.png";
		console.log(link);
		link.click();
	}
	var savButton=document.getElementById('save');
	savButton.addEventListener('click',saveImage);
})();

var eraseButton=(()=>{
	var eraseImage=()=>{
		console.log("hee");
		pubsub.emit('erase',erase);
	}
	var eraseButton=document.getElementById('erase');
	eraseButton.addEventListener('click',eraseImage);
})();
