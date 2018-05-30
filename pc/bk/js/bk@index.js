/**
 * @Author:WebYuanJiMing
 * @city:Zhengzhou/HN,china
 * @+E-mail:yuanjiming959@163.com
 * @Date:16/10/2017
 * @js：bk@index.js
 **/
"use strict"
$(function () {
    /**主页tab点击事件**/
    $('.table-nav ul li').bind('click', function () {
       $(this).addClass("active_num").siblings('li').removeClass("active_num");
    });
    $('.table-nav ul li').each(function () {
       $(this).click(function () {
            $(this).addClass("active_num");
            $(this).parent().siblings("li").removeClass("active_num");
       });
    });
    /**logo**/
    var $this=$(".logo");
    $this.animate({top:'30px',opacity:'1',fontSize:'3em'},"slow");
    $this.hover(function() {
        $(this).find("img").addClass("three-d");
    }, function() {
        $(this).find("img").removeClass("three-d");
    });
    /**number递增**/
    $('.counter').countUp();
    /**首页获取scrollTop**/
    var tmpArray = new Array();
    $(window).scroll(function () {
        var scroll_len = $(window).scrollTop();
        var wTop = $(window).scrollTop();
        if (wTop) {
            var sections = $(".section");
            for (var i = 0, len = sections.length; i < len; i++) {
                var top = sections.eq(i).offset().top;
                tmpArray[i] = Math.abs(wTop - top);
            }
            var tmpValue = Math.min.apply(null, tmpArray)
            if (735<wTop) {
                $(".col-bing .col-bing-right").addClass("col-bring");
                $('.col-bing-right').animate({opacity: '1'},4000);
            }else{
                $(".col-bing .col-bing-right").removeClass("col-bring");
            }
            if(1600<wTop){
                $(".col-slider-nav .slider-box ul li").addClass("fadeInUp");
                $('.col-slider-nav .slider-box ul li').animate({opacity: '1'},3000);
            }else{
                $(".col-slider-nav .slider-box ul li").removeClass("fadeInUp");
            }
            var index = 0;
            if (typeof tmpArray.indexOf == "function") {
                index = tmpArray.indexOf(tmpValue);
            } else {
                for (var j = 0, len = tmpArray.length; j < len; j++) {
                    if (tmpArray[j] == tmpValue) {
                        index = j;
                        break;
                    }
                }
            }
        }
    });
    /**产品hover**/
    var $t=$(".col-bing .col-bing-right,.icon-first .icon-0,.icon-first .icon0-txt,.nav-center .nav-icon");
    $t.hover(function() {
        $(this).removeClass("col-bring");
        $(this).removeClass("col-bring-left");
    });
    var $r=$(".icon-first .icon-1,.icon-first .icon1-txt");
    $r.hover(function() {
        $(this).removeClass("p1");
        $(this).removeClass("p3");
    });
    /**footer旋转部分效果**/
    /**nav-img**/
    var $th=$(".qr-img");
    $th.animate({top:'30px',opacity:'1',fontSize:'3em'},"slow");
    $th.hover(function() {
        $(this).find("img").addClass("three-d");
    }, function() {
        $(this).find("img").removeClass("three-d");
    });
    /**-app-**/
    /**首页获取scrollTop**/
    var armArray = new Array();
    $(window).scroll(function () {
        var scroll_len = $(window).scrollTop();
        var wTop = $(window).scrollTop();
        if (wTop){
            var sections = $(".app_sect");
            for (var i = 0, len = sections.length; i < len; i++) {
                var top = sections.eq(i).offset().top;
                armArray[i] = Math.abs(wTop - top);
            }
            var tmpValue = Math.min.apply(null, armArray)
            /**first**/
            if (wTop<500){
                $(".nav-center .nav-icon").addClass("col-bring-left");
                $(".nav-center .nav-txt").addClass("opy");
                $('.nav-center .nav-icon').animate({opacity: '1'},4000);
            }else{
                $(".nav-center .nav-icon").removeClass("col-bring-left");
                $(".nav-center .nav-txt").removeClass("opy");
            }
            /**second**/
            if (wTop<1500){
                $(".icon-first .icon-0").addClass("col-bring-left");
                $(".icon-first .icon0-txt").addClass("col-bring");
                $('.nav-center .icon-0,.icon-first .icon0-txt').animate({opacity: '1'},4000);
            }else{
                $(".icon-first .icon-0").removeClass("col-bring-left");
                $(".icon-first .icon0-txt").removeClass("col-bring");
            }
            /**three**/
            if (2000<wTop){
                $(".icon-first .icon-1").addClass("p1");
                $(".icon-first .icon1-txt").addClass("p3");
                $('.nav-center .icon-1,.icon-first .icon1-txt').animate({opacity: '1'},4000);
            }else{
                $(".icon-first .icon-1").removeClass("p1");
                $(".icon-first .icon1-txt").removeClass("p3");
            }
            /**-four-**/
            if(wTop<3100){
                $(".icon-first .icon-2").addClass("fadeInUp");
                $(".icon-first .icon2-txt").addClass("p3");
                $('.icon-first .icon-2,.icon-first .icon2-txt').animate({opacity: '1'},3000);
            }else{
                $(".icon-first .icon-2").removeClass("fadeInUp");
                $(".icon-first .icon2-txt").removeClass("p3");
            }
            var index = 0;
            if (typeof armArray.indexOf == "function") {
                index = armArray.indexOf(tmpValue);
            } else {
                for (var j = 0, len = armArray.length; j < len; j++) {
                    if (armArray[j] == tmpValue) {
                        index = j;
                        break;
                    }
                }
            }
        }
    });
    /**about页面点击事件**/
    $('.about_width ul li').bind('click', function () {
        $(this).addClass("active_abt").siblings('li').removeClass("active_abt");
    });
    $('.about_width ul li').each(function(){
        $(this).click(function(){
            var $that=$(this).attr("id").substring(3,4);
            var $n=parseInt($that);
            switch($n)
            {
                case 1:
                    $(".div-"+$n).show();
                    $(".div-2,.div-3").hide();
                    break;
                case 2:
                    $(".div-"+$n).show();
                    $(".div-1,.div-3").hide();
                    break;
                case 3:
                    $(".div-"+$n).show();
                    $(".div-1,.div-2").hide();
                    break;
                default:
                    $(".div-1").show();
                    $(".div-2,.div-3").hide();
            }
            $(this).addClass("active_abt");
            $(this).parent().siblings("li").removeClass("active_abt");
        });
    });

});