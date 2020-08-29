var guanli = document.getElementById('guanli')
var contact = document.getElementById('contact')
var refund = document.getElementById('refund')
var a = 1
//客服
guanli.onclick = function () {
  if (a % 2 != 0) {
    contact.style.display = 'block'
  } else {
    contact.style.display = 'none'
  }
  a++
}
//跳转封装
function myFunc(http) {
  window.location.href = http
}
// onclick="myFunc('')"
refund.onclick = function () {
  myFunc('../tyj/refund.html')
}
