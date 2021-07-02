let colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById("button");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hashcolor = "#";
    for(let i=0; i<6; i++){
        hashcolor+=colors[Math.floor(Math.random()*colors.length)];
    }
    color.textContent = hashcolor;
    color.style.color = hashcolor;
    document.body.style.backgroundColor = hashcolor;
});