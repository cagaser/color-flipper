function getRandInt(max) {
    return Math.floor(Math.random() * max)
}
function randomBGcolor(){
    var red = getRandInt(256)
    var green = getRandInt(256)
    var blue =getRandInt(256)
    var rgb = `rgb(${red},${green},${blue})`
    document.body.style.backgroundColor = rgb
}