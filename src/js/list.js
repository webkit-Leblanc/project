require(['config'],function(){
    require(['jquery','define_self','common'],function($,define){
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
               define.toTop($)
        });
        var params=decodeURI(location.search).substring(1);
        // console.log(params);
        var temp=params.split('=');
        function render(arr){
            $list=$('#mylist').find('.gdlist');
            var html='';
            for(var i=0;i<arr.length;i++){
                html+=`<li data-id=gd${arr[i].id}>
                        <img src="../img/goods/${arr[i].img}" class=gd${arr[i].id}>
                        <p>
                            <span>￥</span>
                            <strong>${arr[i].newprice}</strong>
                        </p>
                        <div class="gds-info">
                            <a class=gd${arr[i].id}>
                                ${arr[i].rule}
                            </a>
                        </div>
                        <p class="comment-box">
                            评论<i>233</i>
                            <span class="buycar">加入购物车</span>
                            <span class="shoucang">    收藏</span>
                        </p>
                    </li>`
            }
            $list.html(html);       
        }
        $.ajax({
            url:'../api/detail_list.php',
            type:'GET',
            data:{keyword:temp[1],gain:true},
            dataType:'json',
            success:function(data){
                render(data);
            }
        })
        var $lis=$('#mylist').find('.gdlist');
        $lis.on('click',['img','a'],function(e){
            // console.log(e.target.className)
            var gdclassname=e.target.className.substring(2);
            if(gdclassname.length>0){
                $.ajax({
                    url:'../api/detail_list.php',
                    data:{id:gdclassname,litode:true},
                    type:'GET',
                    success:function(data){
                       // if(data=="hot"){
                       //      location.href=`html/goodsdetail.html?id=${hotclassname}`;
                       // }   
                       if(data=="OK"){
                            location.href=`../html/goodsdetail.html?id=${gdclassname}`;
                             
                       }              
                    }
                })
            }       
        })
        /*列表页点击加入购物车*/
        var goodList=[];
        /*页面刷新后,存之前的,然后再push*/
        var cookie=document.cookie;
        console.log(cookie)
        /*截取*/
        cookie.split('; ').forEach(function(item){
            var arr=item.split('=');
            if(arr[0]==='goodList'){
                goodList=JSON.parse(arr[1]);  
            }    
        })     
        $lis.on('click','.buycar',function(e){
            /*获取对应商品的id-->对应li的data-id*/
            var $currentLi=$(e.target).parent().parent();
            var id=$currentLi.attr('data-id').substring(2);
            $.ajax({
                url:'../api/detail_list.php',
                data:{id:id,addcar:true},
                type:'GET',
                dataType:'json',
                success:function(data){
                    data[0].qty=1;                
                    /*判断是否已存在*/ 
                    for(var i=0;i<goodList.length;i++){
                        if(goodList[i].id==id){
                            goodList[i].qty+=1;
                            break;
                        }
                    }
                    if(i==goodList.length){
                        goodList.push(data[0]);
                    }
                    // var now = new Date();
                    // now.setDate(now.getDate()+7);
                    /*转成json*/
                    document.cookie='goodList='+JSON.stringify(goodList);
                    // console.log('每次点击',document.cookie);
                    // location.href="../html/car.html";   
                }
            })         
        })     
    })
})