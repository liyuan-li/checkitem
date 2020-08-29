var aSpan = document.getElementById('span')
var checked = document.getElementById('check')
var checkson = document.getElementsByName('user')
var user = document.getElementById('user')

var jisuan = document.getElementById('jisuan')
var button = document.getElementById('button')
var yiru = document.getElementById('yiru')
var del = document.getElementById('del')
var shopping = document.getElementById('shopping')
var zongji = document.getElementById('zongji')

var a = 1

//select没效果 不能反向全选 点击全选只有选择效果  删除不会只执行一次
//总计  结算  订单  付款  退款  更新GitHub

window.onload = function () {
  var oUl = document.getElementById('cenRb')
  var aLi = oUl.getElementsByTagName('span')
  for (var i = 0; i < aLi.length; i++) {
    fn1(aLi[i])
  }
  function fn1(aLi) {
    var aInput = aLi.getElementsByTagName('input')
    var aStrong = aLi.getElementsByTagName('strong')[0]
    var num = Number(aStrong.innerHTML)
    var price = parseFloat(document.getElementById('zhi').innerHTML)

    user.onclick = function () {
      if (user.checked == false) {
        aSpan.innerHTML = '0.0元'
      } else {
        aInput[1].onclick = function () {
          for (var i = 0; i < checkson.length; i++) {
            if (checkson[i].checked == true) {
              num++
              aStrong.innerHTML = num
              aSpan.innerHTML = (num * price).toFixed(1) + '元'
            }
          }
        }

        aInput[0].onclick = function () {
          for (var i = 0; i < checkson.length; i++) {
            if (checkson[i].checked == true) {
              if (num > 1) {
                num--
                aStrong.innerHTML = num
                aSpan.innerHTML = (num * price).toFixed(1) + '元'
              } else if (num == 1) {
                Dialog.init('不能再少了,再少就没有了!┭┮﹏┭┮', { maskClick: 1 })
              }
            }
          }
        }

        aStrong.innerHTML = num
        aSpan.innerHTML = (num * price).toFixed(1) + '元'
      }
    }
  }
}

//管理
document.getElementById('guanli').onclick = function () {
  if (a % 2 != 0) {
    guanli.innerHTML = '完成'
    jisuan.style.display = 'none'
    button.style.display = 'none'
    yiru.style.display = 'block'
    del.style.display = 'block'
  } else {
    guanli.innerHTML = '管理'
    jisuan.style.display = 'block'
    button.style.display = 'block'
    yiru.style.display = 'none'
    del.style.display = 'none'
  }
  a++
}

//删除商品
function dell(del, text) {
  del.onclick = function () {
    if (user.checked == true) {
      shopping.remove()
      aSpan.innerHTML = '0.0元'
      Dialog.init(text, { maskClick: 1 })
    } else {
      Dialog.init('请选择商品', { maskClick: 1 })
    }
  }
}
dell(del, '已删除')
dell(yiru, '以移入收藏夹！')

//弹窗
function modal(mdialog1) {
  mdialog1.onclick = function () {
    Dialog.init('请选择商品', { maskClick: 1 })
  }
}
modal(mdialog1)
modal(mdialog2)
// mdialog1.onclick = function () {
//   Dialog.init('请选择商品', { maskClick: 1 });
// }
// mdialog2.onclick = function () {
//   Dialog.init('请选择商品', { maskClick: 1 });
// }

//全选
document.getElementById('check').onclick = function () {
  var checked = document.getElementById('check').checked
  if (checked) {
    for (var i = 0; i < checkson.length; i++) {
      checkson[i].checked = true
    }
  } else {
    for (var i = 0; i < checkson.length; i++) {
      checkson[i].checked = false
      aSpan.innerHTML = '0.0元'
    }
  }
}

//跳转
function myFunc(http) {
  window.location.href = http
}
