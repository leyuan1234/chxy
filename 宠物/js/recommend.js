// JavaScript Document
$(function(){
//下方for循环
	var size=$(".recommend-img li").size()
	for(var i=1; i<=size; i++){
		var li="<li>"+i+"</li>";
		$(".num").append(li)
		}
	/*size  获取当前元素个数*/
	
//手动控制轮播
$(".recommend-img li").eq(0).show()
$(".num li").eq(0).addClass('active')
/*mouseover  可以改成点击事件  click*/
$(".num li").mouseover(function(){
$(this).addClass('active').siblings('li').removeClass('active')
var index=$(this).index()  /*index  当前元素的意思索引值*/
i=index; //i值和自动轮播值是相同的
$(".recommend-img li").eq(index).stop().fadeIn(/*淡入*/).siblings().stop().fadeOut(/*淡出*/)		/*eq 0开始*/
	});
	
//自动控制轮播
 var i=0;
 var t=setInterval(move,1500)	//定时器
	//右
	function move(){
	 i++;
	 if(i==size){i=0;}
	 $(".num li").eq(i).addClass('active').siblings('li').removeClass('active');
	 $(".recommend-img li").eq(i).fadeIn().siblings().fadeOut();
	 };
	 //左
	
//自动轮播鼠标经过移入和移除
	$(".recommend").hover(function(){
		clearInterval(t)
		},function(){
			t=setInterval(move,1500)
			});
			
//左右按钮
	
});