"use strict";

var lis = document.getElementsByClassName("tabs_li");
var content = document.getElementsByClassName("tent")[0];
var container = document.getElementById("tab");
lis[0].style.color = "#ffa53f";

function functionIndex() {
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = "#000";
  }

  $this = event.target;
  var index = Number($this.getAttribute("data-index"));
  $this.style.color = "#ffa53f";
  var containerWidth = Number(window.getComputedStyle(container, null).width.split("px")[0]);
  content.style.transform = "translateX(" + -containerWidth * 1 * index + "px)";
}