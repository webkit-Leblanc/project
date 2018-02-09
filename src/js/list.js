require(['config'],function(){
    require(['jquery','define_self','common'],function($,define){
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
        });
        $('#footer').load('../html/footer.html .footer');
        $('#side-tab').load('../html/header.html .side-tab',function(){
               /* 返回顶部效果*/
               define.toTop($)
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
        var params=decodeURI(location.search).substring(1);
        // console.log(params);
        var temp=params.split('=');
        var $dangqian=$('.product-list').find('.dangqian b');
        var $totalPage=$('.product-list').find('.total');
        function render(arr,arr1){
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
            $dangqian[0].innerText=arr1.pagenum*1;
            $totalPage[0].innerText=Math.ceil(arr1.total*1/arr1.qty);
        }
        /*设置默认值*/
        var pageN0=1;
        var qty=8;

        // $.ajax({
        //     url:'../api/detail_list.php',
        //     type:'GET',
        //     data:{keyword:temp[1],gain:true,pageNo:1,qty:8},
        //     dataType:'json',
        //     success:function(data){      
        //         render(data.data,data);
        //     }
        // })
        fenyeAjax(1,8);
        function fenyeAjax(pagenum,qty){
            $.ajax({
                url:'../api/detail_list.php',
                type:'GET',
                data:{keyword:temp[1],gain:true,pageNo:pagenum,qty:qty},
                dataType:'json',
                success:function(data){      
                    render(data.data,data);
                }
            })
        }
        /*点击切换对应页面*/
        $('.product-list').on('click','.jian',function(){
            console.log(this)
            var old=$dangqian[0].innerText*1;
            $dangqian[0].innerText=old-1;
            if(old<=1){$dangqian[0].innerText=1}
            fenyeAjax($dangqian[0].innerText*1,8);
        })
        $('.product-list').on('click','.jia',function(){
            console.log(this)
            var old=$dangqian[0].innerText*1;
            var all=$totalPage[0].innerText*1;
            $dangqian[0].innerText=old+1;
            if($dangqian[0].innerText>=all){
                $dangqian[0].innerText=$totalPage[0].innerText;
            }
            fenyeAjax($dangqian[0].innerText*1,8);
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
            /*加入购物车动画*/
            var $img=$currentLi.find('img');  
            var $copyImg='copy'+Date.now();
            $copyImg=$img.clone();
            $copyImg.appendTo($('body')); 
            $copyImg.css({
                position:'absolute',
                left:$img.offset().left,
                top:$img.offset().top,
                width:220
            })
            // 设置动画
            var $carlist=$('.carlist');     
            $copyImg.animate({
                left:$carlist.offset().left,
                top:$carlist.offset().top,
                width:50
            },function(){
                $copyImg.remove();
            }) 
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
                    document.cookie='goodList='+JSON.stringify(goodList)+'; path=/';
                    // console.log('每次点击',document.cookie);
                    // location.href="../html/car.html";  
                    var cookie=document.cookie;
                    /*截取*/
                    cookie.split('; ').forEach(function(item){
                        var arr=item.split('=');
                        if(arr[0]==='goodList'){
                            goodList=JSON.parse(arr[1]);  
                        }    
                    })  
                    gainnum(); 
                }
            })

        })
        /*加入购物车动画*/
        function gainnum(){
            var $carlist=$('.carlist');
            var carnum=0;
            goodList.forEach(function(item,idx){
                carnum+=item.qty*1;
                                 
            })    
            $carlist.find('.car-num')[0].innerText=carnum;
        }

    })
})