//这是未使用 已使用  已过期的JS
var option01 = document.getElementById("option01")
var option03 = document.getElementById("option03")

option01.onclick = function(){
    location = "./unused.html"
}
option03.onclick = function(){
    location = "./unused03.html"
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


