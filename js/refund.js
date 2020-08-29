var guanli = document.getElementById('guanli')
var contact = document.getElementById('contact')
var payment = document.getElementById('payment')
var qxz = document.getElementById('qxz')
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

qxz.onclick = function () {
  Dialog.init(
    '<form method="get"><label>拍错 /多拍/不想要<input name="Fruit" type="radio" style="position: absolute;right: 20px;" /></label></br><label>协商一致退款<input name="Fruit" type="radio" style="position: absolute;right: 20px;" /></label></br><label>缺货<input name="Fruit" type="radio" style="position: absolute;right: 20px;"/></label></br><label>未按约定时间发货<input name="Fruit" type="radio" style="position: absolute;right: 20px;"/></label></br><label>其他<input name="Fruit" type="radio" style="position: absolute;right: 20px;"/></label></form>',
    {
      title: '退款原因',
    }
  )
}
//确认付款跳转判定
payment.onclick = function () {
  myFunc('../tyj/Refunddetails.html')
}
//跳转封装
function myFunc(http) {
  window.location.href = http
}
