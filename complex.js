const color_generator = ["1", "2", "3", '4', "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
const click_me = document.querySelector(".button");
const change_color = document.querySelector(".change_color");
const color_text = document.getElementById("color_text");
click_me.addEventListener("click", function(){
    let hex_color = "#";
    for(i = 1; i<= 6; i++){
        console.log(random());
        hex_color += color_generator[random()];
    }
    color_text.textContent = hex_color;
    change_color.style.backgroundColor = hex_color;
})
function random(){
    return Math.floor(Math.random()*color_generator.length);
}