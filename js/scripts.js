


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
                var o=document.getElementById("output"); 
                var b = document.getElementById("p1"); 

if (document.getElementById('q1y').checked) {
  vv = document.getElementById('q1y');
}




                b.innerHTML = "2";
               o.style.display='block';

                
            }
        },500);





