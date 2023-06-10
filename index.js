
var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;

var name1=prompt("Player 1:");
var name2=prompt("Player 2:");

document.querySelectorAll("p")[0].innerHTML=name1;
document.querySelectorAll("p")[1].innerHTML=name2;

var randimg1="images/"+"dice"+random1+".png";
var randimg2="images/"+"dice"+random2+".png";

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",randimg1);
img2.setAttribute("src",randimg2);
/*
if(random1===1){
    document.querySelector(".img").setAttribute("src","./images/dice1.png");
}
else if(random1===2){
    document.querySelector(".img").setAttribute("src","./images/dice2.png");
}
else if(random1===3){
    document.querySelector(".img").setAttribute("src","./images/dice3.png");
}
else if(random1===4){
    document.querySelector(".img").setAttribute("src","./images/dice4.png");
}
else if(random1===5){
    document.querySelector(".img").setAttribute("src","./images/dice5.png");
}

if(random2===1){
    document.querySelector(".img").setAttribute("src","./images/dice1.png");
}
else if(random2===2){
    document.querySelector(".img").setAttribute("src","./images/dice2.png");
}
else if(random2===3){
    document.querySelector(".img").setAttribute("src","./images/dice3.png");
}
else if(random2===4){
    document.querySelector(".img").setAttribute("src","./images/dice4.png");
}
else if(random2===5){
    document.querySelector(".img").setAttribute("src","./images/dice5.png");
}*/

if(random1>random2){
    document.querySelector(".container h1").innerHTML=name1+ "Wins";
}
else if(random2>random1){
    document.querySelector(".container h1").innerHTML=name2+ " Wins";
}
else{
    document.querySelector(".container h1").innerHTML="Its a draw!";
}

