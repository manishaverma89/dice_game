//  Generate a random image using random number
//changing source attribute of img tag at index0

var randomNumber1 = Math.floor(Math.random() * 6) +1;    // generated random number
var randomImage1 = "dice"+randomNumber1+".png";          // generated random image
var randomImageSource = "images/"+randomImage1;          // generated random image source
var image1 = document.querySelectorAll("img")[0];      //selected img tag at index 0
image1.setAttribute("src", randomImageSource);      // setAttribute is used to change the source attribute of img tag


//changing source attribute of img tag at index1

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2  = "dice" + randomNumber2 + ".png";
randomImageSource = "images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);


// if player 1 wins
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
}
// if player 2 wins
else if (randomNumber2 > randomNumber1){
     document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩";
}
//  draw
else {
    document.querySelector("h1").innerHTML = "Draw!";
   
}






