require(['config'],function(){
    require(['jquery','define_self','keCarousel','common'],function($,define){
        $('#header').load('html/header.html .header'); 
        $('#header').css('backgroundColor','#f6f6f6');
        $('#search').load('html/header.html .search',function(){
            /*search部分吸顶效果*/
            define.ceiling($); 
        });
        $('#nav').load('html/header.html .nav',function(){
            $sanji=$('#nav').find('.gds-detail');
            $erjilis=$('#nav').find('.all-goods-box>li');
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
                item.onmouseleave=function(){
                    $sanji.hide();
                    $erjilis.find('i').css({
                        backgroundPositionY:-109+'px'
                    })
                }   
            });          
            $('#nav .title-box>a').on('click',function(e){
                console.log(e.target,e.target.innerText)
                if(e.target.innerText!=''){
                    $.ajax({
                        url:'api/detail_list.php',
                        type:'GET',
                        data:{keyword:e.target.innerText,skip:true},
                        success:function(data){
                            if(data=='OK'){
                               /* 跳到商品列表页*/
                                location.href=`html/list.html?keyword=${e.target.innerText}`;  
                            }          
                        }
                    })      
                }     
            })
        });
        $('#footer').load('html/footer.html .footer');
        $('#side-tab').load('html/header.html .side-tab',function(){
            /* 返回顶部效果*/
            define.toTop($);
            var cookie=document.cookie;   
            var goodList=[];
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
                location.href="html/car.html";
            })
        });
        /* 轮播动画*/
        $('#banner .carousel-box').keCarousel({
                imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.png','img/banner4.jpg'],
                width:1920,
                height:450,
                // type:'horizontal',
                type:'fade',
                duration:4000,
                page:true,
                marquee:false
            })
        var $bigpics=$('#main .goods-floor-box .gds-big-pic');
        var $smallpics=$('#main .goods-floor-box .gds-small-pic');
        var $hotsale=$('#main .goods-floor-box .gds-hot-sale');
        function create_gdsbigpic(ele,url,arr){
            ele.innerHTML='';
            var html=`<a href="#">
                        <img src=${url}>
                      </a>`;
            var $as=$.map(arr,function(val,key){ 
                return `<a>${val}</a>` 
                // return '<a>'+val+'</a>' 
            }).join('');            
            ele.innerHTML=html+'<p>'+$as+'</p>';
        }
        function create_gdsmallpic(arr){
            function render1(item,idx){
                var ul=$('<ul/>');
                var html='';           
                for(var i=0;i<item.length;i++){
                    if(i<=3){
                        html+=`<li>
                                    <img src=img/goods/${item[i].img} id=${item[i].id}>
                                </li>`
                    }
                }
                ul.html(html);                     
                ul.addClass('clearfix');             
                $smallpics[idx].append(ul[0]);     
            }
            var [itemArr0,itemArr1,itemArr2,itemArr3,itemArr4,itemArr5]=[[],[],[],[],[],[]];
            arr.forEach(function(item,idx){
                switch(item.category){
                    case "家中常备":
                        itemArr0.push(item);
                        break;
                    case "慢性用药":
                        itemArr1.push(item);
                        break;
                    case "男科用药":
                        itemArr2.push(item);
                        break;
                    case "母婴专场":
                        itemArr3.push(item);
                        break;
                    case "计生情趣":
                        itemArr4.push(item);
                        break;
                    case "滋补保健":
                        itemArr5.push(item);
                        break;
                }
            })
            render1(itemArr0,0);
            render1(itemArr1,1);
            render1(itemArr2,2);
            render1(itemArr3,3);
            render1(itemArr4,4);
            render1(itemArr5,5);
            var [hotarr0,hotarr1,hotarr2,hotarr3,hotarr4,hotarr5]=[[],[],[],[],[],[]];
            function render2(item,arr,idx){
                item.forEach(function(item1,idx1){
                    // console.log(item1,idx1)
                    if(item1.hot==1){
                        arr.push(item1);                 
                    }      
                })
                var html=''; 
                for(var j=0;j<arr.length;j++){       
                    if(j<=2){
                        html+=`<ul class="hot-detail clearfix">
                                    <li>
                                        <a href="#" class="clearfix">
                                            <div>
                                                <img src=img/goods/${arr[j].img} class=hot${arr[j].id}>
                                            </div>
                                            <div>
                                                <span class=hot${arr[j].id}>${arr[j].name}</span>
                                                <div class="price">
                                                <p>￥<i class="new-price">${arr[j].newprice}</i></p>
                                                <del>￥<i class="old-price"></i>${arr[j].oldprice}</del>  
                                            </div>
                                            </div>  
                                        </a>
                                    </li>
                                </ul>`
                    }
                } 
                $($hotsale[idx]).append($(html));     
            }
            render2(itemArr0,hotarr0,0);
            render2(itemArr1,hotarr1,1);
            render2(itemArr2,hotarr2,2);
            render2(itemArr3,hotarr3,3);
            render2(itemArr4,hotarr4,4);
            render2(itemArr5,hotarr5,5);

        }
        create_gdsbigpic($bigpics[0],'img/seriesProducts/series1_bigpic.jpg',['发烧','耳鸣','口腔溃疡','消化不良','便秘'])
        create_gdsbigpic($bigpics[1],'img/seriesProducts/series2_bigpic.jpg',['保肝护肝','免疫调节','消化不良','健脾和胃']) 
        create_gdsbigpic($bigpics[2],'img/seriesProducts/series3_bigpic.jpg',['保肝护肝','免疫调节','消化不良','健脾和胃'])
        create_gdsbigpic($bigpics[3],'img/seriesProducts/series4_bigpic.jpg',['保肝护肝','免疫调节','消化不良','健脾和胃']) 
        create_gdsbigpic($bigpics[4],'img/seriesProducts/series5_bigpic.jpg',['保肝护肝','免疫调节','消化不良','健脾和胃'])
        create_gdsbigpic($bigpics[5],'img/seriesProducts/series6_bigpic.jpg',['保肝护肝','免疫调节','消化不良','健脾和胃'])
        
        /*页面数据渲染请求*/   
        $.ajax({
            url:'api/list.php',
            type:'POST',
            dataType:'json',
            success:function(data){          
                create_gdsmallpic(data);
                // create_hotsale(data);
            }
        })

        /*点击中小图片跳转到对应商品详情页*/
        /*中图*/
        $smallpics.on('click','img',function(e){
            var gdsid=e.target.id;
            $.ajax({
                url:'api/detail_list.php',
                data:{id:gdsid,detail:true},
                type:'GET',
                success:function(data){
                    if(data=="OK"){
                        location.href=`html/goodsdetail.html?id=${gdsid}`;
                    }           
                }
            })     
        })
        /*小图（热卖系列）*/
        $hotsale.on('click',['img','a'],function(e){
            var hotclassname=e.target.className.substring(3)    
            $.ajax({
                url:'api/detail_list.php',
                data:{id:hotclassname,hot:true},
                type:'GET',
                success:function(data){
                   if(data=="hot"){
                        location.href=`html/goodsdetail.html?id=${hotclassname}`;
                   }      
                }
            })
                 
        })


      
             
    })
})