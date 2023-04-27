setTimeout(function(){
document.getElementById('div1').style.visibility = "visible";
},42000);




const text = 'Will  you choose to embrace the truth, or hide from it? Just look what it\'s done to you.'
const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'R', 'S', 'T', 'U', 'W', 'X', 'Y','Z', ' ', "'"];

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'r', 's', 't', 'u', 'w', 'y', ' ', "'", '?', ',', '.'];
var output = "";
var progress = 0;
const len = text.length;


function glitch() {
  if (progress >= len) {
    return;
  }  
  var randomNums = Math.floor(Math.random() * alpha.length)
  if (alpha[randomNums] == text[progress] || alphaCaps[randomNums] == text[progress]) {
    output += text[progress];
    document.getElementById("text").innerHTML = `${output}`
    progress++;
  } else {
    document.getElementById("text").innerHTML = `${output}${alpha[randomNums]}`
  }
  requestAnimationFrame(glitch);
}

window.onload = function(){
    this.hidden=true;
    glitch();
};
