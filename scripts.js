const north1Button = document.getElementById("buttonN1")
const north2Button = document.getElementById("buttonN2")
const north3Button = document.getElementById("buttonN3")
const north4Button = document.getElementById("buttonN4")

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


function north1Click(){
   var pipeOne = document.getElementById("img1").src
   var pipeTwo = document.getElementById("img2").src
   var pipeThree = document.getElementById("img3").src
   var pipeFour = document.getElementById("img4").src
   var pipeFive = document.getElementById("img5").src
   var pipeSix = document.getElementById("img6").src
   var pipeSeven = document.getElementById("img7").src
   var pipeEight = document.getElementById("img8").src
   var pipeNine = document.getElementById("img9").src
   var pipeTen = document.getElementById("img10").src
   var pipeEleven = document.getElementById("img11").src
   var pipeTwelve = document.getElementById("img12").src
   var pipeThirteen = document.getElementById("img13").src
   var pipeFourteen = document.getElementById("img14").src
   var pipeFifteen = document.getElementById("img15").src
   var pipeSixteen = document.getElementById("img16").src


   var col1 = [pipeTile1, pipeTile5, pipeTile9, pipeTile13]

   col1.unshift(col1.pop);
   console.log(col1)


   document.getElementById("img1").src=pipeThirteen
   document.getElementById("img5").src=pipeOne
   document.getElementById("img9").src=pipeFive
   document.getElementById("img13").src=pipeNine

}


function eventListeners() {
document.getElementById("buttonN1").addEventListener("click", north1Click)
}



// Wait until the document is ready
document.addEventListener("DOMContentLoaded", function() { 
    eventListeners();
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