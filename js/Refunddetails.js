var chexiao = document.getElementById('chexiao')
var see = document.getElementById('see')
var continueA = document.getElementById('continueA')

chexiao.onclick = function () {
  myFunc('../tyj/refund.html')
}
see.onclick = function () {
  myFunc('../tyj/customerservice.html')
}
continueA.onclick = function () {
  myFunc('../')
}
//跳转封装
function myFunc(http) {
  window.location.href = http
}
