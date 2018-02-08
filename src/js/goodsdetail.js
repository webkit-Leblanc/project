require(['config'],function(){
    require(['jquery','define_self','common','gdsZoom'],function($,define){
        $('#header').load('../html/header.html .header'); 
        $('#header').css('backgroundColor','#f6f6f6');
        $('#search').load('../html/header.html .search',function(){
            /*search部分吸顶效果*/
            define.ceiling($);
        });
        $('#nav').load('../html/header.html .nav',function(){
            var $sanji=$('#nav').find('.gds-detail');
            var $erji=$('#nav').find('.all-goods-box')
            $erji.hide();
            $erjilis=$('#nav').find('.all-goods-box>li');
            $('.all-goods-tab')[0].onmouseenter=function(){
                $erji.show();
                $.each($erjilis,function(idx,item){
                    item.onmouseenter=function(){
                        $sanji.hide();
                        if(item==$erjilis[idx]){
                            $(item).find('i').css({
                                // backgroundPosition:-35+'px'+' '+-134+'px'
                                backgroundPositionY:-135+'px'
                            })
                            $($sanji[idx]).stop(true,true).fadeIn();
                        }
                    }
                });
                $('.all-goods-tab')[0].onmouseleave=function(){
                        $sanji.hide();
                        $erjilis.find('i').css({
                            backgroundPositionY:-109+'px'
                        });
                        $erji.hide();
                    }      
            }
        });
        $('#footer').load('../html/footer.html .footer');
        $('#side-tab').load('../html/header.html .side-tab',function(){
           /* 返回顶部效果*/
           define.toTop($);
        });
        $zoom=$('#good-content').find('.goods');
        $zoom.gdsZoom({
            width:402,
            height:402
        });
        $smalllist=$('#good-content').find('.imgbox');
        $smalllist.on('click','img',function(){
            $zoom.find('img').attr({
                src:this.src,
                'data-big':this.dataset.big||this.src
            })
        })
        var params=location.search.substring(1).split('=');
        /*详情页页面渲染*/
        function renderContent(arr){
            $belongtab=$('#good-content').find('.belong-tab');
            $span=$('<span/>');
            $span[0].innerText=arr[0].name+'  '+arr[0].rule;
            $span.appendTo($belongtab).addClass('gdrule');
            $gdimg=$('#good-content').find('.goods img');     
            $gdimg.attr({
                src:'../img/goods/'+arr[0].img,
                dataBig:'../img/goods/'+arr[0].img
            })
            $desc=$('#good-content').find('.gds-desc');
            var html='';
            html=`<h1>${arr[0].name+'  '+arr[0].rule}</h1>
                <p>${arr[0].description}</p>
                <div class="gds-price">
                    <p class="gdsPrice">
                        <label>百洋价</label>
                        <span class="newprice">￥<b>${arr[0].newprice}</b></span>
                        <span class="oldprice">￥${arr[0].oldprice}</span>
                    </p>
                </div>
                <div class="newenjoy">
                    <label>新人专享</label>
                    <a href="#">新人专享450元福利礼包，点击领取</a>
                </div>
                <div class="send">
                    <label>配&emsp;&emsp;送</label>
                    <p>
                        <span class="fahuo">山东青岛&nbsp;&nbsp;至&nbsp;&nbsp;</span>
                        <span class="nowwhere">广州</span>
                        <span class="yunfei">￥7.00</span>
                    </p>
                </div>
                <div class="size">
                    <label>规&emsp;&emsp;格</label>
                    <span>15ml:1.5g 20ml/瓶</span>
                </div>
                <div class="count-box clearfix">
                    <label class="fl">数&emsp;&emsp;量</label>
                    <p class="fl">
                        <i>-</i>
                        <input type="text" value="1"/>
                        <i>+</i>
                    </p>
                </div>
                <div class="buy_add">
                    <p>
                        <a href="#" class="buynow">立即购买</a>
                        <a href="#" class="addcar">加入购物车</a>
                    </p>
                </div>`;
            $desc.html(html);   
                           
        }
        $.ajax({
            url:'../api/detail_list.php',
            data:{id:params[1],only:true},
            type:'GET',
            dataType:'json',
            success:function(data){
                renderContent(data);      
            }
        })

 
    })
})