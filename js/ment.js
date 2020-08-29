var guanli = document.getElementById('guanli')
var contact = document.getElementById('contact')
var payment = document.getElementById('payment')
var check2 = document.getElementById('check2')
var check = document.getElementById('check')
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

//确认付款跳转判定
payment.onclick = function () {
  if (check.checked == true || check2.checked == true) {
    myFunc('../tyj')
  } else {
    Dialog.init('请选择支付方式', { maskClick: 1 })
  }
}
//跳转封装
function myFunc(http) {
  window.location.href = http
}
