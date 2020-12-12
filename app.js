const colors = ["green", "blue", "red", "orange", "white", "yellow", "purple"];
const click_me = document.querySelector(".button");
const color_text = document.getElementById("color_text");
click_me.addEventListener("click", function(){
    const number = colors[random()];
    color_text.textContent = number;
    document.querySelector(".change_color").style.backgroundColor = number;
})
function random(){
    return Math.floor(Math.random()*colors.length);
}