const north1Button = document.getElementById("buttonN1")
const north2Button = document.getElementById("buttonN2")
const north3Button = document.getElementById("buttonN3")
const north4Button = document.getElementById("buttonN4")
const south1Button = document.getElementById("buttonS1")
const south2Button = document.getElementById("buttonS2")
const south3Button = document.getElementById("buttonS3")
const south4Button = document.getElementById("buttonS4")
const west1Button = document.getElementById("buttonW1")
const west2Button = document.getElementById("buttonW2")
const west3Button = document.getElementById("buttonW3")
const west4Button = document.getElementById("buttonW4")
const east1Button = document.getElementById("buttonE1")
const east2Button = document.getElementById("buttonE2")
const east3Button = document.getElementById("buttonE3")
const east4Button = document.getElementById("buttonE4")

var pipeTile1 = document.getElementById("tileNo_1")
var pipeTile2 = document.getElementById("tileNo_2")
var pipeTile3 = document.getElementById("tileNo_3")
var pipeTile4 = document.getElementById("tileNo_4")
var pipeTile5 = document.getElementById("tileNo_5")
var pipeTile6 = document.getElementById("tileNo_6")
var pipeTile7 = document.getElementById("tileNo_7")
var pipeTile8 = document.getElementById("tileNo_8")
var pipeTile9 = document.getElementById("tileNo_9")
var pipeTile10 = document.getElementById("tileNo_10")
var pipeTile11 = document.getElementById("tileNo_11")
var pipeTile12 = document.getElementById("tileNo_12")
var pipeTile13 = document.getElementById("tileNo_13")
var pipeTile14 = document.getElementById("tileNo_14")
var pipeTile15 = document.getElementById("tileNo_15")
var pipeTile16 = document.getElementById("tileNo_16")


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
        assignTerminals
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