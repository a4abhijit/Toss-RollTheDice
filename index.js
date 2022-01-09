var started = true ;
// After Clicking on Roll the Dice
var h1Element = document.querySelector("h1");

    h1Element.addEventListener("click", function() {
        if(started = true){
            started = false;
            rollTheDice();
        }
    });


//After Clicking on Reset Button
document.querySelector("h3").addEventListener("click", function(){
    reloadPage();
});

//Method to roll dice and show results
function rollTheDice(){
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    
    var randomImage1 = "images/dice" + randomNumber1 + ".png" ;
    var randomImage2 = "images/dice" + randomNumber2 + ".png" ;
    
    document.querySelector(".img1").setAttribute("src", randomImage1);
    document.querySelector(".img2").setAttribute("src", randomImage2);
    
    var heading = document.querySelector(".container h1");
    
    if(randomNumber1 > randomNumber2){
        heading.innerHTML  = "🚩 Player 1 Wins!" ;
    }
    else if(randomNumber1 < randomNumber2){
        heading.innerHTML  = "Player 2 Wins! 🚩" ;
    }
    else{
        heading.innerHTML  = "Draw!" ;
    } 
}

//Method to reload the page
function reloadPage(){
    location.reload()
}