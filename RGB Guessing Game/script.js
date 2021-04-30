var guess=document.getElementById("guess");
var levels=document.querySelector(".levels");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var block=Array.from(document.querySelectorAll(".block"));
var random_color=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
var colors_container=document.querySelectorAll(".container.grid.grid-3")[1];
var message=document.getElementById("congratulations");

guess.innerText=random_color.toUpperCase();
//-------------------------buttons effect
levels.childNodes.forEach(function(item){
    item.addEventListener('click', function(){
        item.style.backgroundColor="var(--primary-color)";
        item.style.color="#fff"; 
    });
});
//-------------------------display colors for easy level
easy.addEventListener('click', function(){
    //---change the color of the other choice
    hard.style.backgroundColor="#fff";
    hard.style.color="var(--primary-color)"; 
    //---change the guess everytime we click
    message.innerText="";
    document.getElementById("gif").style.opacity="0"
    random_color=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    guess.innerText=random_color.toUpperCase();
    //---display choices
    var r=Math.floor(Math.random()*3);
    block.forEach(function (item,index){
        if (index < 3){
            if(item.style.display=="none") item.style.display="block";
            if(index==r) item.style.backgroundColor=random_color;
            else item.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        }
        else item.style.display="none"
    });
});
//-------------------------display colors for hard level
hard.addEventListener('click', function(){
    //---change the color of the other choice
    easy.style.backgroundColor="#fff";
    easy.style.color="var(--primary-color)"; 
    //---change the guess everytime we click
    message.innerText="";
    document.getElementById("gif").style.opacity="0"
    random_color=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    guess.innerText=random_color.toUpperCase();
    //---display choices
    var r=Math.floor(Math.random()*3);
    block.forEach(function (item,index){
        if(item.style.display=="none") item.style.display="block";
        if(index >=3) item.style.display="block"
        if(index==r) item.style.backgroundColor=random_color;
        else item.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    });
});
//-------------------------What happens when the user clicks on a button
block.forEach(function(item){
    item.addEventListener('click', function(){
        if(item.style.backgroundColor===random_color){
            message.innerText="You picked the right Color!";
            message.style.color=random_color
            document.getElementById("gif").src="./gifs/right.gif"
            document.getElementById("gif").style.opacity="1"
        } 
        else{
            item.style.backgroundColor="rgb(24, 24, 24)";
        }
    });
});