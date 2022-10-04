/*
Features:
    2 text inputs
    1 button

functions: 
    When the user clicks the button 
    Take the text from input 1,
    double it and put it in input 2
 */

let textbox = document.getElementById("text");
let double = document.getElementById("text2");
let button = document.getElementById("button");

// On click listener
button.onclick = function () {
    textInput = textbox.value;
    textInput.split('')
    let textOutput = ""; 

    for(let i = 0; i <= textInput.length; i++){
       textOutput += (textInput[i] + textInput[i] )
    }
    alert(textOutput)
}



