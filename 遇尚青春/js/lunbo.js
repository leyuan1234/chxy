/**
 * Created by lenovo on 2017/7/24.
 */
$(function() {
    /***用于放图片的数组*****/
    var arr = ["img/index/lunbo-1.webp.jpg", "img/index/lunbo-2.webp.jpg", "img/index/lunbo-3.webp.jpg", "img/index/lunbo-5.jpg"];
    /****初始化页面启动显示的图片*****/
    $(".ul_img li img").attr("src", arr[0]);
    $(".carousel").css("background","#C26FFF");
    var index = 0;
    var timer = null;
    /****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
    $(".ul_text li").hover(function() {
        clearInterval(timer);
        index = $(this).index();
        //alert(index);
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
            'opacity': 1
        }, 700);
    }, function() {
        auto();
    });

    auto();
    /*****自动播放图片的定时器****/
    function auto() {
        timer = setInterval(function() {
            index++;
            switch(index)
            {
                case 0:
                    $(".carousel").css("background","#C26FFF");
                    break;
                case 1:
                    $(".carousel").css("background","#F9799A");
                    break;
                case 2:
                    $(".carousel").css("background","#97DFF5");
                    break;
                case 3:
                    $(".carousel").css("background","#FFC720");
                    break;
                default:
                    $(".carousel").css("background","#C26FFF");
            }

            if (index > 3) {
                index = 0;
            }

            $(".ul_text li").eq(index).addClass("hover").siblings().removeClass("hover");
            $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 500);
        }, 2000);
    }
});