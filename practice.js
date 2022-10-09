/*
Features:
    2 text inputs
    1 button

functions: 
    When the user clicks the button 
    Take the text from input 1,
    double it and put it in input 2
 */

// Gets id from project 1 HTML code 
let textbox = document.getElementById("text");
let button = document.getElementById("button");

//second project id
let userBox = document.getElementById("username");
let passBox = document.getElementById("password");
let submit = document.getElementById("submit");

// On click listener-- handles everything once the user clicks the submit button
button.onclick = function () {
    // gets clients input
    textInput = textbox.value;
    textInput.split('')

    //variable place holder
    let textOutput = ""; 


    // For loop that iterates over user input from textbox #1 
    // and puts it in a place holder
    for(let i = 0; i < textInput.length; i++){
        //iterates through user input and at each index
        //it will double it and add it to the place holder
       textOutput += (textInput[i] + textInput[i] );

       //Output to textbox #2
       document.getElementById("text1").value = textOutput
    }

}
// Svond project onclick function 
submit.onclick = function() {
    //getting user input
    user = userBox.value;
    pass = passBox.value;

    // password place holder
    let passHold = "";

    //checking to see if the password has specific characters in user input
    for(let i = 0; i < pass.length; i++) {
        passHold += (pass[i]);
        // Need to do some research on how to check
        /*
         If(i === ){

            https://bobbyhadz.com/blog/javascript-check-if-string-contains-character
         }
         */
        console.log(passHold)
    }

    //console.log("Username " + user + " . " + "Password = " + pass)
}



