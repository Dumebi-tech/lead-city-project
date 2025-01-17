function light(one) {
    var pic;
    if ( one == 0) {
        pic = "off lightbulb.jpg"
    } else {
        pic = "on lightbulb.jpg"
    }
    document.getElementById("myImage").src = pic;
}