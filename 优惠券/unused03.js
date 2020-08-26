
var option01 = document.getElementById("option01")
var option02 = document.getElementById("option02")

option01.onclick = function(){
    location = "./unused.html"
}
option02.onclick = function(){
    location = "./unused02.html"
}

//这是左上方>退出按钮的链接JS
var skip = document.getElementById("skip");
skip.onclick = function(){
    location = "./coupon01.html"
}

//删除的JS
var hit = document.getElementById("hit");
var but = document.getElementById("but");
var fom = document.getElementById("fom");

hit.onclick = function(){
    fom.style = "display: block;"
}
but.onclick = function(){
    hit.style = "display: none;"
    this.style = "display: none;"
}
