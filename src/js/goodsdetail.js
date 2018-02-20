require(['config'],function(){
    require(['jquery','define_self','common','gdsZoom'],function($,define){
        $('#header').load('../html/header.html .header',function(){
            var cookie=document.cookie;
            var goodList=[];
            /*截取*/
            cookie.split('; ').forEach(function(item){
                var arr=item.split('=');
                if(arr[0]==='goodList'){
                    goodList=JSON.parse(arr[1]);  
                }    
            })  
            var $cartnum=$('.cart-num');
            var carnum=0;
            goodList.forEach(function(item,idx){
                carnum+=item.qty*1;                     
            })    
            $cartnum[0].innerText=carnum;
            $cartnum.parent().on('click',function(){
                location.href="../html/car.html";
            }) 
        }); 
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
            $('#nav .title-box>a').on('click',function(e){
                console.log(e.target,e.target.innerText)
                if(e.target.innerText!=''){
                    $.ajax({
                        url:'../api/detail_list.php',
                        type:'GET',
                        data:{keyword:e.target.innerText,skip:true},
                        success:function(data){
                            if(data=='OK'){
                               /* 跳到商品列表页*/
                                location.href=`list.html?keyword=${e.target.innerText}`;
                            }
                                 
                        }
                    })        
                }     
            })

        });
        $('#footer').load('../html/footer.html .footer');
        $('#side-tab').load('../html/header.html .side-tab',function(){
            /* 返回顶部效果*/
            define.toTop($);
            var cookie=document.cookie;
            /*截取*/
            cookie.split('; ').forEach(function(item){
                var arr=item.split('=');
                if(arr[0]==='goodList'){
                    goodList=JSON.parse(arr[1]);  
                }    
            })  
            var $carlist=$('.carlist');
            var carnum=0;
            goodList.forEach(function(item,idx){
                carnum+=item.qty*1;                     
            })    
            $carlist.find('.car-num')[0].innerText=carnum;
            $carlist.on('click',function(){
                location.href="../html/car.html";
            })
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
                        <i class="jian">-</i>
                        <input type="text" value="1"/>
                        <i class="jia">+</i>
                    </p>
                </div>
                <div class="buy_add">
                    <p>
                        <a class="buynow">立即购买</a>
                        <a class="addcar">加入购物车</a>
                    </p>
                </div>`;
            $desc.html(html);                          
        }
        function gainnum(){
            var $carlist=$('.carlist');
            var $cartnum=$('.cart-num');
            var carnum=0;
            goodList.forEach(function(item,idx){
                carnum+=item.qty*1;
                                 
            })    
            $carlist.find('.car-num')[0].innerText=carnum;
            $cartnum[0].innerText=carnum;
        }
        var goodList=[];
        /*页面刷新后,存之前的,然后再push*/
        var cookie=document.cookie;
        /*截取*/
        cookie.split('; ').forEach(function(item){
            var arr=item.split('=');
            if(arr[0]==='goodList'){
                goodList=JSON.parse(arr[1]);  
            }    
        }) 
        $.ajax({
            url:'../api/detail_list.php',
            data:{id:params[1],only:true},
            type:'GET',
            dataType:'json',
            success:function(data){
                renderContent(data);
                data[0].qty=1;
                $addcar=$('#good-content').find('.addcar');
                 /*点击立即购买加入购物车 同时跳转到购物车清单页*/
                 /*输入框文本改变时候 修改加入的数量 存进cookie*/
                $changenum=$('.count-box').find('input');             
                $addcar.on('click',function(){
                    /*动画*/  
                    var $currentImg=$('.goods').find('img');
                    console.log($currentImg);
                    var $copyImg=$currentImg.clone();
                    $copyImg.appendTo($('body'));
                    $copyImg.css({
                        position:'absolute',
                        left:$currentImg.offset().left,
                        top:$currentImg.offset().top,
                        width:350
                    }) 
                    var $carlist=$('.carlist');     
                    $copyImg.animate({
                        left:$carlist.offset().left,
                        top:$carlist.offset().top,
                        width:40
                    },function(){
                        $copyImg.remove();
                    }) 
                    /*把之前请求到的数据写进cookie 同时判断去重*/  
                    console.log(data)
                    for(var i=0;i<goodList.length;i++){
                        if(goodList[i].id==params[1]){
                            goodList[i].qty+=$changenum[0].value*1;
                            break;
                        }
                    }
                    if(i==goodList.length){
                        data[0].qty=$changenum[0].value*1;
                        goodList.push(data[0]);
                    }
                    document.cookie='goodList='+JSON.stringify(goodList)+'; path=/';
                    console.log(document.cookie)
                    gainnum();
                })
         
                $('#good-content').on('click','.jian',function(){
                    var val=$(this).next().val()*1;
                    $(this).next()[0].value=val-1;
                    if($(this).next()[0].value<=1){$(this).next()[0].value=1};    
                })
                $('#good-content').on('click','.jia',function(){
                    var val=$(this).prev().val()*1;
                    $(this).prev()[0].value=val+1;     
                })
                /*立即购买的时候 也要获取对应的value值 存进cookie*/
                $buynow=$('#good-content').find('.buynow');
                $buynow.on('click',function(){
                    console.log(data)
                    for(var i=0;i<goodList.length;i++){
                        if(goodList[i].id==params[1]){
                            goodList[i].qty+=$changenum[0].value*1;
                            break;
                        }
                    }
                    if(i==goodList.length){
                        data[0].qty=$changenum[0].value*1;
                        goodList.push(data[0]);
                    }
                    document.cookie='goodList='+JSON.stringify(goodList)+'; path=/';
                    console.log(document.cookie)
                    gainnum();
                    location.href="../html/car.html";

                })


            }
        })
       
        
             


 
    })
})