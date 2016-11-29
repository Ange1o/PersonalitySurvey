


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

for (var i = 1; i <41; i++) {
    if (document.getElementById('q'+i+'y').checked) {
        result[i] = parseInt(document.getElementById('q'+i+'y').value);
    } else if(document.getElementById('q'+i+'n').checked){
        result[i] = parseInt(document.getElementById('q'+i+'n').value);
    } else if(document.getElementById('q'+i+'yn').checked){
        result[i] = parseInt(document.getElementById('q'+i+'yn').value);
    } else{
        finished = false;
        break;
    }
}


var r1 = result[1]+result[17]+result[24]+result[29]+result[36];
var r2 = result[2]+result[13]+result[18]+result[25]+result[30];
var r3 = result[3]+result[19]+result[26]+result[31]+result[37];
var r4 = result[4]+result[7]+result[14]+result[35]+result[38];//d
var r5 = result[11]+result[20]+result[21]+result[28]+result[34];//e
var r6 = result[9]+result[12]+result[16]+result[23]+result[40];//f
var r7 = result[5]+result[10]+result[15]+result[27]+result[32];//g
var r8 = result[6]+result[8]+result[22]+result[33]+result[39];//h

var o=document.getElementById("output"); 
var p1 = document.getElementById("p1"); 
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");
var e = document.getElementById("error"); 

if (finished){
                p1.innerHTML = r1;
                p2.innerHTML = r2;
                p3.innerHTML = r3;
                p4.innerHTML = r4;
                p5.innerHTML = r5;
                p6.innerHTML = r6;
                p7.innerHTML = r7;
                p8.innerHTML = r8;
               o.style.display='block';
}else{
e.style.display = 'block';
}               
            }
        },500);





