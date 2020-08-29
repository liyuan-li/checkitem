var continueA = document.getElementById('continueA')
var see = document.getElementById('see')
var guanli = document.getElementById('guanli')
var contact = document.getElementById('contact')

var a = 1
//跳转封装
function myFunc(http) {
  window.location.href = http
}
// onclick="myFunc('')"

see.onclick = function () {
  myFunc('../tyj/Orderdetails.html')
}
continueA.onclick = function () {
  myFunc('../')
}

//客服
guanli.onclick = function () {
  if (a % 2 != 0) {
    contact.style.display = 'block'
  } else {
    contact.style.display = 'none'
  }
  a++
}
