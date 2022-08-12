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
   var pipeFive = document.getElementById("img5").src
   var pipeNine = document.getElementById("img9").src
   var pipeThirteen = document.getElementById("img13").src
   
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