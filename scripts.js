var bottom_left = document.createElement("img");
bottom_left.src = "./images/Green Pipes/Bottom-Left.png";

var left_right = document.createElement("img");
left_right.src = "./images/Green Pipes/Left-Right.png";

var left_top = document.createElement("img");
left_top.src = "images/Green Pipes/Left-Top.png";

var right_bottom = document.createElement("img");
right_bottom.src = "images/Green Pipes/Right-Bottom.png";

var top_bottom = document.createElement("img");
top_bottom.src = "images/Green Pipes/Top-Bottom.png";

var top_right = document.createElement("img");
top_right.src = "images/Green Pipes/Top-Right.png";



function assignPipes() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      possiblePipes = [bottom_left, left_right, left_top, right_bottom, top_bottom, top_right];

      for (let i=1; i <=16; i++) {
        document.getElementById("img"+i).src = possiblePipes[getRandomInt(6)].src
      } 

}


function assignTerminals() {
    function getRandomInt(max) {
        return Math.ceil(Math.random() * max);
      }

      var a = getRandomInt(16)
      var b = getRandomInt(16)

      if (a != b){
    
        document.getElementById("term"+a).style.backgroundColor = "#00FF00";
        document.getElementById("term"+b).style.backgroundColor = "#00FF00";
      
      }
      else {
        assignTerminals()
      }

}


function north1Click(){
   var pipeOne = document.getElementById("img1").src
   var pipeFive = document.getElementById("img5").src
   var pipeNine = document.getElementById("img9").src
   var pipeThirteen = document.getElementById("img13").src

   document.getElementById("img1").src=pipeThirteen
   document.getElementById("img5").src=pipeOne
   document.getElementById("img9").src=pipeFive
   document.getElementById("img13").src=pipeNine
}

function north2Click(){
    var pipeTwo = document.getElementById("img2").src
    var pipeSix = document.getElementById("img6").src
    var pipeTen = document.getElementById("img10").src
    var pipeFourteen = document.getElementById("img14").src
   
    document.getElementById("img2").src=pipeFourteen
    document.getElementById("img6").src=pipeTwo
    document.getElementById("img10").src=pipeSix
    document.getElementById("img14").src=pipeTen
}

function north3Click(){
    var pipeThree = document.getElementById("img3").src
    var pipeSeven = document.getElementById("img7").src
    var pipeEleven = document.getElementById("img11").src
    var pipeFifteen = document.getElementById("img15").src
   
    document.getElementById("img3").src=pipeFifteen
    document.getElementById("img7").src=pipeThree
    document.getElementById("img11").src=pipeSeven
    document.getElementById("img15").src=pipeEleven
}

function north4Click(){
    var pipeFour = document.getElementById("img4").src
    var pipeEight = document.getElementById("img8").src
    var pipeTwelve = document.getElementById("img12").src
    var pipeSixteen = document.getElementById("img16").src
   
    document.getElementById("img4").src=pipeSixteen
    document.getElementById("img8").src=pipeFour
    document.getElementById("img12").src=pipeEight
    document.getElementById("img16").src=pipeTwelve
}

function south1Click(){
    var pipeOne = document.getElementById("img1").src
    var pipeFive = document.getElementById("img5").src
    var pipeNine = document.getElementById("img9").src
    var pipeThirteen = document.getElementById("img13").src
 
    document.getElementById("img1").src=pipeFive
    document.getElementById("img5").src=pipeNine
    document.getElementById("img9").src=pipeThirteen
    document.getElementById("img13").src=pipeOne
 }
 
 function south2Click(){
     var pipeTwo = document.getElementById("img2").src
     var pipeSix = document.getElementById("img6").src
     var pipeTen = document.getElementById("img10").src
     var pipeFourteen = document.getElementById("img14").src
    
     document.getElementById("img2").src=pipeSix
     document.getElementById("img6").src=pipeTen
     document.getElementById("img10").src=pipeFourteen
     document.getElementById("img14").src=pipeTwo
 }
 
 function south3Click(){
     var pipeThree = document.getElementById("img3").src
     var pipeSeven = document.getElementById("img7").src
     var pipeEleven = document.getElementById("img11").src
     var pipeFifteen = document.getElementById("img15").src
    
     document.getElementById("img3").src=pipeSeven
     document.getElementById("img7").src=pipeEleven
     document.getElementById("img11").src=pipeFifteen
     document.getElementById("img15").src=pipeThree
 }
 
 function south4Click(){
     var pipeFour = document.getElementById("img4").src
     var pipeEight = document.getElementById("img8").src
     var pipeTwelve = document.getElementById("img12").src
     var pipeSixteen = document.getElementById("img16").src
    
     document.getElementById("img4").src=pipeEight
     document.getElementById("img8").src=pipeTwelve
     document.getElementById("img12").src=pipeSixteen
     document.getElementById("img16").src=pipeFour
 }

 function west1Click(){
    var pipeOne = document.getElementById("img1").src
    var pipeTwo = document.getElementById("img2").src
    var pipeThree = document.getElementById("img3").src
    var pipeFour = document.getElementById("img4").src
   
    document.getElementById("img1").src=pipeFour
    document.getElementById("img2").src=pipeOne
    document.getElementById("img3").src=pipeTwo
    document.getElementById("img4").src=pipeThree
}

function west2Click(){
    var pipeFive = document.getElementById("img5").src
    var pipeSix = document.getElementById("img6").src
    var pipeSeven = document.getElementById("img7").src
    var pipeEight = document.getElementById("img8").src
   
    document.getElementById("img5").src=pipeEight
    document.getElementById("img6").src=pipeFive
    document.getElementById("img7").src=pipeSix
    document.getElementById("img8").src=pipeSeven
}

function west3Click(){
    var pipeNine = document.getElementById("img9").src
    var pipeTen = document.getElementById("img10").src
    var pipeEleven = document.getElementById("img11").src
    var pipeTwelve = document.getElementById("img12").src
   
    document.getElementById("img9").src=pipeTwelve
    document.getElementById("img10").src=pipeNine
    document.getElementById("img11").src=pipeTen
    document.getElementById("img12").src=pipeEleven
}

function west4Click(){
    var pipeThirteen = document.getElementById("img13").src
    var pipeFourteen = document.getElementById("img14").src
    var pipeFifteen = document.getElementById("img15").src
    var pipeSixteen = document.getElementById("img16").src
   
    document.getElementById("img13").src=pipeSixteen
    document.getElementById("img14").src=pipeThirteen
    document.getElementById("img15").src=pipeFourteen
    document.getElementById("img16").src=pipeFifteen
}

function east1Click(){
    var pipeOne = document.getElementById("img1").src
    var pipeTwo = document.getElementById("img2").src
    var pipeThree = document.getElementById("img3").src
    var pipeFour = document.getElementById("img4").src
   
    document.getElementById("img1").src=pipeTwo
    document.getElementById("img2").src=pipeThree
    document.getElementById("img3").src=pipeFour
    document.getElementById("img4").src=pipeOne
}

function east2Click(){
    var pipeFive = document.getElementById("img5").src
    var pipeSix = document.getElementById("img6").src
    var pipeSeven = document.getElementById("img7").src
    var pipeEight = document.getElementById("img8").src
   
    document.getElementById("img5").src=pipeSix
    document.getElementById("img6").src=pipeSeven
    document.getElementById("img7").src=pipeEight
    document.getElementById("img8").src=pipeFive
}

function east3Click(){
    var pipeNine = document.getElementById("img9").src
    var pipeTen = document.getElementById("img10").src
    var pipeEleven = document.getElementById("img11").src
    var pipeTwelve = document.getElementById("img12").src
   
    document.getElementById("img9").src=pipeTen
    document.getElementById("img10").src=pipeEleven
    document.getElementById("img11").src=pipeTwelve
    document.getElementById("img12").src=pipeNine
}

function east4Click(){
    var pipeThirteen = document.getElementById("img13").src
    var pipeFourteen = document.getElementById("img14").src
    var pipeFifteen = document.getElementById("img15").src
    var pipeSixteen = document.getElementById("img16").src
   
    document.getElementById("img13").src=pipeFourteen
    document.getElementById("img14").src=pipeFifteen
    document.getElementById("img15").src=pipeSixteen
    document.getElementById("img16").src=pipeThirteen
}


function eventListeners() {
document.getElementById("buttonN1").addEventListener("click", north1Click)
document.getElementById("buttonN2").addEventListener("click", north2Click)
document.getElementById("buttonN3").addEventListener("click", north3Click)
document.getElementById("buttonN4").addEventListener("click", north4Click)
document.getElementById("buttonS1").addEventListener("click", south1Click)
document.getElementById("buttonS2").addEventListener("click", south2Click)
document.getElementById("buttonS3").addEventListener("click", south3Click)
document.getElementById("buttonS4").addEventListener("click", south4Click)
document.getElementById("buttonW1").addEventListener("click", west1Click)
document.getElementById("buttonW2").addEventListener("click", west2Click)
document.getElementById("buttonW3").addEventListener("click", west3Click)
document.getElementById("buttonW4").addEventListener("click", west4Click)
document.getElementById("buttonE1").addEventListener("click", east1Click)
document.getElementById("buttonE2").addEventListener("click", east2Click)
document.getElementById("buttonE3").addEventListener("click", east3Click)
document.getElementById("buttonE4").addEventListener("click", east4Click)
}



// Wait until the document is ready
document.addEventListener("DOMContentLoaded", function() { 
    eventListeners();
    assignTerminals();
    assignPipes();
});






/* 
working function for a single button click

function north1Click(){
    var pipeOne = document.getElementById("img1").src
    var pipeFive = document.getElementById("img5").src
    var pipeNine = document.getElementById("img9").src
    var pipeThirteen = document.getElementById("img13").src
    
    document.getElementById("img1").src=pipeThirteen
    document.getElementById("img5").src=pipeOne
    document.getElementById("img9").src=pipeFive
    document.getElementById("img13").src=pipeNine
 
 }
 */