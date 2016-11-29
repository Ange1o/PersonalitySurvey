


var didClickIt = false;
        document.getElementById("submit1").addEventListener("click",function(){
            // same as onclick, keeps the JS and HTML separate
            didClickIt = true;
        });

        setInterval(function(){
            // this is the closest you get to an infinite loop in JavaScript
            if( didClickIt ) {
                didClickIt = false;
                // document.write causes silly problems, do this instead (or better yet, use a library like jQuery to do this stuff for you)
                


var finished = true;
var result = [];


// need change to 41
var temp = 5;


for (var i = 1; i <temp; i++) {
    if (document.getElementById('q'+i+'y').checked) {
        result[i] = document.getElementById('q'+i+'y').value;
    } else if(document.getElementById('q'+i+'n').checked){
        result[i] = document.getElementById('q'+i+'n').value;
    } else if(document.getElementById('q'+i+'yn').checked){
        result[i] = document.getElementById('q'+i+'yn').value;
    } else{
        finished = false;
        break;
    }
}


var o=document.getElementById("output"); 
                var b = document.getElementById("p1"); 
var e = document.getElementById("error"); 

if (finished){

               o.style.display='block';
}else{
e.style.display = 'block';
}


                
            }
        },500);





