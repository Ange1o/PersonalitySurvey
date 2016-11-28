
function changeClass (newElement){
		var other = document.getElementById("box");
		if (newElement.checked){
			other.className = "show";
		}
		else{
			other.className ="hide";
		}

}




//function changeColor(){
// 	document.getElementById("formatBox").addEventListener("click" ,function(e){
// 		if(e.target && e.target.nodeName === "INPUT"){
// 			var classes = e.target.parentNode.className.split(" ");
// 			if(classes){
// 				for(var x = 0; x < classes.length; x++){
					
// 					if(classes[x] == "rightBox"){
// 						e.target.parentNode.className = "click";

// 					}	else 
// 					if(classes[x] == "click"){
// 						e.target.parentNode.className = "rightBox";
// 					}
// 				}
// 			}

// 		}	

// 	});
//}
	



// function changeFormat(){
	
		// document.getElementById("formatRadio").addEventListener("change" ,function(e){
			// if(e.target && e.target.nodeName === "INPUT"){
			// 	var changeClass = e.target.parentNode.className.split(" "), 
			// 		siblings = e.target.parentNode.parentNode.childNodes; 

			// 	for (var i = 0; i < siblings.length; i++){
			// 		if(siblings[i].className === "change"){
			// 			siblings[i].className = "checkboxgroup";
			// 		}
			// 	}	
			// 	if(changeClass.length){
			// 		for(var x = 0; x < changeClass.length; x++){
					
			// 			if (changeClass[x] == "checkboxgroup" ) {
			// 				e.target.parentNode.className = "change";
			// 			}
						
							
			// 		}
			// 	}
			// }
		
//}


function toggle(event) {
	//cache the clicked element and its parents


	var $clickedElement = $(event.currentTarget),
		$clickedElementParent = $clickedElement.parent();

		//first remove all instances of .change from element's immediate siblings

	//$clickedElementParent.siblings(".checkboxgroup").removeClass("change");

	//checkelement type and toggle if checkbox 
	if($clickedElementParent.hasClass("checkboxgroup")){
		if($clickedElement.prop("type") === "radio") {
			$clickedElementParent.siblings(".checkboxgroup").removeClass("change");
			$clickedElementParent.addClass("change");
		} else {
			$clickedElementParent.toggleClass("change");
		}
	}

}







window.onload = function () {

$(".checkboxgroup").on("click","input", toggle)


}



