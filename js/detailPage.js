function getID(el) {
    return document.getElementById(el);
}

//滑动效果
function appSlide() {
    let oMove = getID('content');
    let oTab = getID('indexes');
    let oImg = getID('photo_img')
    let aBox = oImg.getElementsByTagName('li');
    let oA = oTab.getElementsByTagName('li');
    let firstBox = aBox[0];
    let firstA = oA[0];
    let start = null;
    let end = null;
    let n = 0;
    oMove.ontouchstart = function (event) {
        var event = event || window.event;
        start = event.touches[0].pageX;
        oMove.ontouchend = function () {
            var event = event || window.event;
            end = event.changedTouches[0].pageX;
            if ((start - end) > 0 && n < aBox.length - 1) {
                n++;
                change();
            } else if ((start - end) < 0 && n > 0) {
                n--;
                change();
            }
        }
    }

    function change() {
        firstBox.classList.remove('reveal');
        aBox[n].classList.add('reveal');
        firstA.classList.remove('active');
        oA[n].classList.add('active');
        firstBox = aBox[n];
        firstA = oA[n];
    }
}
appSlide();

//弹出框
function popover() {
    let tu = true;
    $('#collect').on('click', function () {
        if (tu) {
            $('#collect i').html('<img src="./images/xing.png" alt="">');
            tu = false;
        } else {
            $('#collect i').html('<img src="./images/xing01.png" alt="">');
            tu = true;
        }
    })
    $(window).on('scroll', function () {
        let top = $(document).scrollTop();
        if (top == 0) {
            $('footer').fadeIn(300);
        } else {
            $('footer').fadeOut(300);
        }
    })
    $('.join').on('click', function () {
        $('#shopping_box').fadeTo(100, 1);
    })
    $('.close').on('click', function () {
        $('#shopping_box').hide();
    })
    $('.product').on('click', 'a', function () {
        $('.product a').removeClass('eight');
        $(this).addClass('eight');
    })
    $('.product a').eq(1).click(function () {
        $('#price_eight').html('<span>¥ </span><i>49.45</i>');
    })
    $('.product a').eq(0).click(function () {
        $('#price_eight').html('<span>¥ </span><i>98.90</i>');
    })
    let n = 1;
    $('#plus').on('click', function () {
        let sum = 98.90;
        let nums = +$('#one').text();
        let price_bg = sum * nums;
        $('#price_eight').html('<span>¥ </span><i>' + price_bg.toFixed(2) + '</i>');
        $('.numbers span').html('' + (n++) + '');
    })
    $('#subtract').on('click', function () {
        let sum = 98.90;
        let nums = +$('#one').text();
        let price_bg = sum * nums;
        if (n <= 1) {
            $('.numbers span').html('1');
        } else {
            $('#price_eight').html('<span>¥ </span><i>' + price_bg.toFixed(2) + '</i>');
            $('.numbers span').html('' + (n--) + '');
        }
    })
    $('.confirm').on('click', function () {
        $('#shopping_box').hide();
    })
}
popover();

function share() {
    $('#share').on('click', function () {
        $('#share_bg').fadeIn(200);
    })
    $('#share_bg .cancel').on('click', function () {
        $('#share_bg').fadeOut(100);
    })
    $('#share_bg .links_bg').on('click', 'li', function () {
        $('#share_bg').fadeOut(100);
        $('.copy').fadeIn(200).delay(1500).fadeOut();
    })
}
share();

//倒计时
function TimeDown(val) {
    //倒计时的总秒数
    let totalSeconds = parseInt(val / 1000);
    //取模（余数）
    let modulo = totalSeconds % (60 * 60 * 24);
    let hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    let minutes = Math.floor(modulo / 60);
    let seconds = modulo % 60;
    hours = hours.toString().length == 1 ? '0' + hours : hours;
    minutes = minutes.toString().length == 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length == 1 ? '0' + seconds : seconds;
    console.log(hours, minutes, seconds);
    $('#hour').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);
    let timer = null;
    timer = setTimeout(function () {
        TimeDown(val - 1000);
    }, 1000)
    if (seconds == '00') {
        clearTimeout(timer);
        $('.outmoded').fadeOut(200);
        $('.rush').fadeOut(200);
    }
}
TimeDown(5000);