$(function(){
    window.onscroll= function(){scrollFunction()};
function scrollFunction(){
    if(document.documentElement.scrollTop > 10){
        document.getElementById("containerWrapperHeader").style.backgroundColor = "rgba(255,255,255,1)";
        document.getElementById("containerWrapperHeader").style.transition = ".4s";
        document.getElementById("containerWrapperHeader").style.top = "0";
        document.getElementById("containerWrapperHeader").style.zIndex = "999";
        $('.gnb > a').css({color:"#333"});
        $('.gnb > ul > li > a').css({color:"#333"});

        $('.gnb > ul > li > a').hover(function(){
            $(this).css({color:"red"});
        },function(){
            $(this).css({color:"#333"});
        });

        $('.gnb').mouseenter(function(){
            $(this).css({backgroundColor:"#f5f5f5"});
        });
        $('.gnb').mouseleave(function(){
            $(this).css({backgroundColor:"rgba(255,255,255,0)"});
        });

    }
    else {
        document.getElementById("containerWrapperHeader").style.backgroundColor = "rgba(255,255,255,0)";
        document.getElementById("containerWrapperHeader").style.top = "40px";
        $('.gnb > a').css({color:"#fff"});
        $('.gnb > ul > li > a').css({color:"#eee"});

        $('.gnb > ul > li > a').hover(function(){
            $(this).css({color:"red"});
        },function(){
            $(this).css({color:"#fff"});
        });

        $('.gnb').mouseenter(function(){
            $(this).css({backgroundColor:"rgba(0,0,0,.4)"});
        });
        $('.gnb').mouseleave(function(){
            $(this).css({backgroundColor:"rgba(0,0,0,0)"});
        });
    }
}

$('.gnb').mouseenter(function(){
        $('.header > ul > li > ul > li').stop().slideDown();
    });
    $('.gnb').mouseleave(function(){
        $('.header > ul > li > ul > li').stop().slideUp();
    });

$('.menuSlide').hide();
$('.navBtn').click(function(){
    $('.menuSlide').stop().animate({width:"toggle"});
});
$('.navBg').click(function(){
    $('.menuSlide').stop().animate({width:"toggle"});
});


$('.gnb-m').click(function(){
    if($('.gnb-m ul li' == 'display:"none"')){
        $(this).find('ul li').stop().slideToggle();
    }else{
        $(this).find('ul li').stop().slideUp();
    }
});

});