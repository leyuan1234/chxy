// JavaScript Document
$(document).ready(function() {
var length,
currentIndex = 0,
interval,
hasStarted = false, //是否已经开始轮播 
t = 3000; //轮播时间间隔 
length = $('.slider-panel').length;
//将除了第一张图片隐藏 
$('.slider-panel:not(:first)').hide();
//将第一个slider-item设为激活状态 
$('.slider-item:first').addClass('slider-item-selected');
//隐藏向前、向后翻按钮 
$('.slider-page').hide();
//鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
$('.slider-panel, .slider-pre, .slider-next').hover(function() {
stop();
$('.slider-page').show();
}, function() {
$('.slider-page').hide();
start();
});
$('.slider-item').hover(function(e) {
stop();
var preIndex = $(".slider-item").filter(".slider-item-selected").index();
currentIndex = $(this).index();
play(preIndex, currentIndex);
}, function() {
start();
});
$('.slider-pre').unbind('click');
$('.slider-pre').bind('click', function() {
pre();
});
$('.slider-next').unbind('click');
$('.slider-next').bind('click', function() {
next();
});
/** 
* 向前翻页 
*/
function pre() {
var preIndex = currentIndex;
currentIndex = (--currentIndex + length) % length;
play(preIndex, currentIndex);
}
/** 
* 向后翻页 
*/
function next() {
var preIndex = currentIndex;
currentIndex = ++currentIndex % length;
play(preIndex, currentIndex);
}
/** 
* 从preIndex页翻到currentIndex页 
* preIndex 整数，翻页的起始页 
* currentIndex 整数，翻到的那页 
*/
function play(preIndex, currentIndex) {
$('.slider-panel').eq(preIndex).fadeOut(500)
.parent().children().eq(currentIndex).fadeIn(1000);
$('.slider-item').removeClass('slider-item-selected');
$('.slider-item').eq(currentIndex).addClass('slider-item-selected');
}
/** 
* 开始轮播 
*/
function start() {
if (!hasStarted) {
hasStarted = true;
interval = setInterval(next, t);
}
}
/** 
* 停止轮播 
*/
function stop() {
clearInterval(interval);
hasStarted = false;
}
//开始轮播 
start();
});
var TempArr = []; //存储option 
$(function() {
/*先将数据存入数组*/
$("#typenum option").each(function(index, el) {
TempArr[index] = $(this).text();
});
$(document).bind('click',
function(e) {
var e = e || window.event; //浏览器兼容性 
var elem = e.target || e.srcElement;
while (elem) { //循环判断至跟节点，防止点击的是div子元素 
if (elem.id && (elem.id == 'typenum' || elem.id == "makeupCo")) {
return;
}
elem = elem.parentNode;
}
$('#typenum').css('display', 'none'); //点击的不是div或其子元素 
});
})

function changeF(this_) {
$(this_).prev("input").val($(this_).find("option:selected").text());
$("#typenum").css({
"display": "none"
});
}
function setfocus(this_) {
$("#typenum").css({
"display": ""
});
var select = $("#typenum");
for (i = 0; i < TempArr.length; i++) {
var option = $("<option></option>").text(TempArr[i]);
select.append(option);
}
}

function setinput(this_) {
var select = $("#typenum");
select.html("");
for (i = 0; i < TempArr.length; i++) {
//若找到以txt的内容开头的，添option 
if (TempArr[i].substring(0, this_.value.length).indexOf(this_.value) == 0) {
var option = $("<option></option>").text(TempArr[i]);
select.append(option);
}
}
}