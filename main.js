let colors = ['Green', 'Red', 'Orange', 'Blue', 'Violet', 'White', 'Black'];

const btn = document.getElementById("button");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    console.log(document.body);
    const randomNumber = Math.floor(Math.random() * colors.length);
    
    document.body.style.backgroundColor = colors[randomNumber];
    
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});