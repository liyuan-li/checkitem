function getID(el) {
    return document.getElementById(el);
}

function tab() {
    let oTab = getID('tab');
    let oMove = getID('move');
    let aBox = oMove.getElementsByClassName('content_box');
    let oA = oTab.getElementsByTagName('a');
    let firstA = oA[0];
    firstA.classList.add('active');
    oTab.addEventListener('click', function (el) {
        let els = el || window.event;
        let _this = els.target || els.srcElement;
        let index = parseInt(_this.getAttribute('data-index'));
        firstA.classList.remove('active');
        oMove.style.transform = 'translateX(' + (-aBox[0].offsetWidth * index) + 'px)'
        if (_this.nodeName.toLowerCase() == 'a') {
            _this.classList.add('active');
        }
        firstA = _this;
    })
}
tab();

function order() {
    $('.goods').on('click','.commodity',function () {
        location.href = 'detailPage.html';
    })
}
order();
/* //滑动效果
function appSlide() {
    let oTab = getID('tab');
    let oMove = getID('move');
    let aBox = oMove.getElementsByClassName('content_box');
    let oA = oTab.getElementsByTagName('a');
    let firstBox = aBox[0];
    let firstA = oA[0];
    let start = null;
    let end = null;
    let n = 0;
    oMove.ontouchstart = function (event) {
        console.log(event);
        var event = event || window.event;
        start = event.touches[0].pageX;
        oMove.ontouchend = function () {
            var event = event || window.event;
            end = event.changedTouches[0].pageX;
            if ((start - end)>0 && n<aBox.length -1) {
                n ++;
                firstBox.classList.remove('reveal');
                aBox[n].classList.add('reveal');
                firstA.classList.remove('active');
                oA[n].classList.add('active');
                firstBox = aBox[n];
                firstA = oA[n];
            }else if ((start - end)<0 && n>0) {
                n --;
                firstBox.classList.remove('reveal');
                aBox[n].classList.add('reveal');
                firstA.classList.remove('active');
                oA[n].classList.add('active');
                firstBox = aBox[n];
                firstA = oA[n];
            }
        }
    }
}
appSlide(); */