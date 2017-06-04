'use strict'
var inputArea = document.getElementById("input");
var inputKeys = document.getElementsByClassName("keys");
var clearKeys = document.getElementById("clear");
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var displayText = document.getElementById("displayArea");
var container = document.getElementById("container");
var asciiBody = document.getElementById("asciiBody");
var upperCase = true;
var currentView = 1;
var trialCount = 0;
var words = [
    "my watch fell in the water",
    "prevailing wind from the east",
    "never too rich and never too thin",
    "breathing is difficult",
    "I can see the rings on Saturn",
    "physics and chemistry are hard",
    "my bank account is overdrawn",
    "elections bring out the best",
    "we are having spaghetti",
    "time to go shopping",
    "a problem with the engine",
    "elephants are afraid of mice",
    "my favorite place to visit",
    "three two one zero blast off",
    "my favorite subject is psychology",
    "circumstances are unacceptable",
    "watch out for low flying objects",
    "if at first you do not succeed",
    "please provide your date of birth",
    "we run the risk of failure",
    "prayer in schools offends some",
    "he is just like everyone else",
    "great disturbance in the force",
    "love means many things",
    "you must be getting old",
    "the world is a stage",
    "can I skate with sister today",
    "neither a borrower nor a lender be",
    "one heck of a question",
    "question that must be answered",
    "beware the ides of March",
    "double double toil and trouble",
    "the power of denial",
    "I agree with you",
    "play it again Sam",
    "the force is with you",
    "you are not a jedi yet",
    "an offer you cannot refuse",
    "are you talking to me",
    "yes you are very smart",
    "all work and no play",
    "hair gel is very greasy",
    "Valium in the economy size",
    "the facts get in the way",
    "the dreamers of dreams"
];
displayText.innerHTML = words[trialCount];


var leftRow1 = [
    ".",
    "E", 
    "T", 
    "A", 
    "I",
    "N",
    "O",
    "S",
    "<"
];

var leftRow2 = [
    "space",
    "H", 
    "R",
    "D",
    "L",
    "U",
    "C",
    "M"
];

var rightRow1 = [
    ".",
    "F",
    "W",
    "Y",
    "G",
    "P",
    "B",
    "<"
];

var rightRow2 = [
    "space",
    "V",
    "K",
    "Q",
    "J",
    "X",
    "Z"
];

var symbolRow1 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
];

var symbolRow2 = [
    "-",
    "/",
    ":",
    ";",
    "(",
    ")",
    "$",
    "&",
    "@",
    "\""
];
var symbolRow3 = [
    "space",
    ".",
    ",",
    "?",
    "|",
    "'",
    "<"
]


Array.from(inputKeys).forEach(function(element) {
    element.addEventListener('click', type(element.innerHtml));
});    

$('#clear').click(function(){
    inputArea.innerText= "";
});

function clearView(){
    container.innerHTML = "";

    
}


$('#shift').click(function(){
    if(upperCase){
        $(".keys").each(function() {
            $(this).attr("id",  $(this).attr("id").toLowerCase());
            $(this).text($(this).attr("id"));
            upperCase = false; 
        });
    } else {
        $(".keys").each(function() {
            $(this).attr("id",  $(this).attr("id").toUpperCase());
            $(this).text($(this).attr("id"));
            upperCase = true; 
        });            
    }

});    
    

function type(key){
    inputArea.innerHtml = "Hello"
}


function reassignKeys(){
    inputKeys = document.getElementsByClassName("keys");
    Array.from(inputKeys).forEach(function(element) {
        element.addEventListener('click', type(element.innerHtml));
    });
    $('.keys').click(function(){
        var newRow = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");

        var now = Date.now();
        cell3.innerText = now;

        if($(this).attr('id') == "space"){
            console.log($(this).attr('id'));
            inputArea.innerText= inputArea.innerText += '\u00a0';
        } else if($(this).attr('id') == "<"){
            console.log($(this).attr('id'));
            inputArea.innerText= inputArea.innerText.substring(0,inputArea.innerText.length-1);
        } else {
            if(trialCount > 4){
                cell1.innerText = $(this).attr('id');
                cell2.innerText = $(this).attr('id').charCodeAt(0);
                newRow.appendChild(cell1);
                newRow.appendChild(cell2);
                newRow.appendChild(cell3);
                asciiBody.appendChild(newRow);    
            }
            inputArea.innerText= inputArea.innerText += $(this).attr('id');
        }





        if(inputArea.innerText.replace(/\s/g /* all kinds of spaces*/,
         " ").toLowerCase() === words[trialCount].replace(/\s/g /* all kinds of spaces*/,
         " ").toLowerCase()){
            if(trialCount < 44){
                trialCount++;
                displayText.innerText = words[trialCount];
            } else {
                displayText.innerText = "THE END. Thank you for your time. Derry says hi."
            }
            inputArea.innerText = "";
        }
        var $this = $(this),
        character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
        
    // Code for processing the key.
    });
    
}

function populateView1(){
    clearView();
    row1 = document.createElement("div");
    row1.classList = "row1";
    row1.id = "row1";
    for(var i = 0; i < leftRow1.length; i++ ){
        var key = document.createElement("div");
        key.innerHTML= leftRow1[i];
        key.classList="keys";
        key.id = leftRow1[i];
        row1.appendChild(key);
    };

    row2 = document.createElement("div");
    row2.classList = "row2";
    row2.id = "row2";    
    for(var i = 0; i < leftRow2.length; i++ ){
        var key = document.createElement("div");
        key.innerHTML= leftRow2[i];
        key.classList="keys";
        key.id = leftRow2[i];
        row2.appendChild(key);
    };

    container.appendChild(row1);
    container.appendChild(row2);
    reassignKeys();
              
}


function populateView2(){
    clearView();
    row1 = document.createElement("div");
    row1.classList = "row1";
    row1.id = "row1"; 
    row2 = document.createElement("div");
    row2.classList = "row2";
    row2.id = "row2";        
    for(var i = 0; i < rightRow1.length; i++ ){
        var key = document.createElement("div");
        key.innerHTML= rightRow1[i];
        key.classList="keys";
        key.id = rightRow1[i];
        row1.appendChild(key);
    };
    for(var i = 0; i < rightRow2.length; i++ ){
        var key = document.createElement("div");
        key.innerHTML= rightRow2[i];
        key.classList="keys";
        key.id = rightRow2[i];
        row2.appendChild(key);
    };
    container.appendChild(row1);
    container.appendChild(row2);    
    reassignKeys();        
}
function populateView3(){
    clearView();
    row1 = document.createElement("div");
    row1.classList = "row1 symbols";
    row1.id = "row1"; 
    row2 = document.createElement("div");
    row2.classList = "row2 symbols";
    
    row2.id = "row2";     
    row3 = document.createElement("div");
    row3.classList = "row3 symbols";
    
    row3.id = "row3";             
    for(var i = 0; i < symbolRow1.length; i++ ){
        var key = document.createElement("div");
        key.innerHTML= symbolRow1[i];
        key.classList="keys";
        key.id = symbolRow1[i];
        row1.appendChild(key);
    };
    for(var i = 0; i < symbolRow2.length; i++ ){
        var key = document.createElement("div");
        key.innerHTML= symbolRow2[i];
        key.classList="keys";
        key.id = symbolRow2[i];
        row2.appendChild(key);
    };
    for(var i = 0; i < symbolRow3.length; i++ ){
        var key = document.createElement("div");
        key.innerHTML= symbolRow3[i];
        key.classList="keys";
        key.id = symbolRow3[i];
        row3.appendChild(key);
    };
    container.appendChild(row1);
    container.appendChild(row2);    
    container.appendChild(row3);        
        
    reassignKeys();             
}

function populateTextInput(){
    clearView();
    var inputView = document.createElement("div");
    inputView.innerText = inputArea.innerText;
    container.appendChild(inputView);
}


$( document ).ready(function() {
   populateView1();
});


function toggleView(){
    switch(currentView) {
        case 1:
            populateView1();
            break;
        case 2:
            populateView2();
            break;
        case 3:
            populateView3();
            break;            
        default:
            populateView1();
    }
}




$(".container").on("swiperight",function(){
    if(currentView == 1){
        currentView = 3;
    } else if(currentView > 1){
        currentView --;
    } 
    toggleView();
    
    console.log("swiped right");
    
});  
$(".container").on("swipeleft",function(){
    if(currentView == 3){
        currentView = 1;
    }else if(currentView < 3 && currentView > 0){
        currentView ++;
    } 
    toggleView()
    
    console.log("swiped left");
    
});                         
$(".container").on("swipedown",function(){
    console.log("swiped down");
    if(currentView <= 0){
        currentView = -currentView;

    }

    toggleView();

});  
$(".container").on("swipeup",function(){
    console.log("swiped up");
    if(currentView >= 0){
        currentView = -currentView;

    }
    populateTextInput();
});     

var button = document.getElementById("button");
$("#button").on("click",function(){
    $("#asciiTable").tableExport({type:'xml',escape:'false'});
});
