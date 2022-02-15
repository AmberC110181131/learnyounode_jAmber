const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
function changeColor(){
    var colorOrder = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[colorOrder];
    document.getElementById('color').innerHTML = colors[colorOrder];
}