var pubsub={
	on:(eventname,funtion)=>{
		if(!this.events){
			this.events={};
		}
		this.events[eventname]=this.events[eventname]||[];
		this.events[eventname].push(funtion);
	},
	off:(eventname,funtion)=>{
		if(this.events[eventname]){
			for(var ind in this.events[eventname]){
				this.events[eventname].splice(index,1);
				break;
			};
		}
	},
	emit:(eventname,data)=>{
		if(this.events[eventname]){
			this.events[eventname].forEach(func=>{
				func(data);
			});
		}
	}
}