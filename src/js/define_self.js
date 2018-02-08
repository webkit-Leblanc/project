define(function(){
    return{
        /*search部分吸顶效果*/
        ceiling($){
            var $xiding=$('#search');
            // $xiding[0].style.boxShadow="0 0 10px #ccc";
            // $xiding.slideUp();
            $xiding.css({
                zIndex:2,
                background:'#fff'
            });
            window.onscroll=function(){
                if(window.scrollY>=800){
                    // $xiding.slideDown();
                    $xiding.addClass('fix');
                }else{
                    // $xiding.slideUp();
                    $xiding.removeClass('fix');
                }
            }
        },
        /* 返回顶部效果*/
        toTop($){
            var $top=$('#side-tab').find('.toTop');
            $top.on('click',function(){
                var timer=setInterval(function(){
                var scrollDistance=window.scrollY;
                var speed=parseInt(scrollDistance/10);
                if(scrollDistance==0||speed==0){
                    clearInterval(timer);
                    window.scrollTo(0,0);
                }
                window.scrollBy(0, -speed);
                },20);
            })
        }
    }
});

