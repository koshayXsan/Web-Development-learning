var randomNumber1= Math.floor((Math.random() * 6) + 1);
rn= "images/dice"+randomNumber1+".png";

var a= document.querySelectorAll("img")[0];

a.setAttribute("src",rn);


var randomNumber2= Math.floor((Math.random() * 6) + 1);
rn1= "images/dice"+randomNumber2+".png";
var b= document.querySelectorAll("img")[1];


b.setAttribute("src",rn1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";

}