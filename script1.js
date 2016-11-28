function changeFormat(){
	
		document.getElementById("formatRadio").addEventListener("change" ,function(e){
			if(e.target && e.target.nodeName === "INPUT"){
				var changeClass = e.target.parentNode.className.split(" "),
					siblings = e.target.parentNode.parentNode.childNodes;
				for (var i = 0; i < siblings.length; i++){
					if(siblings[i].className === "change"){
						siblings[i].className = "checkboxgroup";
					}
				}	
				if(changeClass.length){
					for(var x = 0; x < changeClass.length; x++){
					
						if (changeClass[x] == "checkboxgroup" ) {
							e.target.parentNode.className =  e.target.parentNode.className +" change";
						}
						
							
					}
				}

		
		}	
	});

}