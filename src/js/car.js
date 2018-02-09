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
        }); 
        $('#header').css('backgroundColor','#f6f6f6');
        $('#search').load('../html/header.html .search');
        $('#footer').load('../html/footer.html .footer');
        $('#side-tab').load('../html/header.html .side-tab',function(){
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
            // $carlist.on('click',function(){
            //     location.href="../html/car.html";
            // })
        });
        function gainCookie(){
            var buyList=[];
            var cookie=document.cookie;
            cookie.split('; ').forEach(function(item){
                var arr=item.split('=');
                if(arr[0]=='goodList'){
                    buyList=JSON.parse(arr[1]);
                }
            })
            return buyList;
        }
        gainCookie();
        var $gdlist=$('#car-main').find('.gdlist');
        var $carinfo=$('#car-main').find('.car-info');
        var $quan1=$('#car-main').find('.quan1');
        var $quan2=$('#car-main').find('.quan2');
        function render(){
            var buyList=gainCookie();
            var total=0;
            var discount=0;
            var sumqty=0;
            var html1='';
            var html2='';
            buyList.forEach(function(item,idx){
                total+=item.newprice*item.qty*1;
                discount+=(item.oldprice-item.newprice)*item.qty*1;
                sumqty+=item.qty*1;
                html1+=`<li class="clearfix" data-id=${item.id}>
                                <label>
                                    <input type="checkbox" />
                                </label>
                                <div class="gdpic fl">
                                    <img src="../img/goods/${item.img}">
                                </div>
                                <div class="name fl">
                                    <p><a href="#">${item.rule}</a></p>
                                </div>
                                <div class="rule fl">
                                    <p>规格:2.5g*180袋</p>
                                </div>
                                <div class="price fl">
                                    <p class=new${item.id}>￥${item.newprice*1*item.qty}</p>
                                    <p><del class=old${item.id}>￥${item.oldprice*1*item.qty}</del></p>
                                </div>
                                <div class="changenum fl">
                                    <p>
                                        <a class="jian">-</a>
                                        <input type="text" value=${item.qty}>
                                        <a class="jia">+</a>
                                    </p>
                                </div>
                                <div class="onlysum fl">
                                    <p class=only${item.id}>￥${item.newprice*1*item.qty}</p>
                                </div>
                                
                                <div class="more fl">
                                    <a class="del">删除</a>
                                    <a class="move">移至收藏夹</a>
                                </div>
                            </li>`;    
            })
            $gdlist.html(html1);
            html2=`<p class="choose-price">
                        <span>已选择<b>${sumqty}</b></span>
                        <span>总价:<em>￥${total}</em></span> 
                    </p>
                    <p class="discount-price">
                        <span>已优惠:<i>￥-${discount}</i></span>
                    </p>`;
            $carinfo.html(html2);
            $('#car-main').find('.gnnum')[0].innerText=sumqty;
            var $checkbox=$gdlist.find(':checkbox');
            if($checkbox.length==0){
                $quan1.prop('checked',false);  
                $quan2.prop('checked',false);  
            }    
        }
        render();
        /*点击删除商品*/
        $('#car-main').on('click','.del',function(){
            var $currentLi=$(this).closest('li');
            // $currentLi.remove();
            console.log(gainCookie());
            var gdsid=$currentLi.attr('data-id');
            var buyList=gainCookie();
            for(var i=0;i<buyList.length;i++){
                if(buyList[i].id==gdsid){
                    buyList.splice(i,1);
                }
            }
            console.log(buyList);
            document.cookie='goodList='+JSON.stringify(buyList)+'; path=/';
            render();
        })
        
        /*点击全选 全选 全不选*/ 
        var $quan1=$('#car-main').find('.quan1');
        var $quan2=$('#car-main').find('.quan2');
        var $ckboxs=$('#car-main').find(':checkbox').slice(1,4);

        $quan1.on('click',function(){
            var $checkbox=$gdlist.find(':checkbox');
            $checkbox.prop('checked',this.checked);
            $quan2.prop('checked',this.checked);       
        })
        $quan2.on('click',function(){
            var $checkbox=$gdlist.find(':checkbox');
            $checkbox.prop('checked',this.checked);
            $quan1.prop('checked',this.checked);       
        })
        
        function checkAll(){
            var $checked=$gdlist.find(':checked');
            var $checkbox=$gdlist.find(':checkbox');           
            $quan1.prop('checked',$checkbox.length==$checked.length);
            $quan2.prop('checked',$checkbox.length==$checked.length);
        }
        $gdlist.on('click','input:checkbox',function(){
            checkAll();    
        })
        /*全选+删除*/ /*点击删除对应勾选的商品*/
        $delchoose=$('#car-main').find('.del-choose');
        $delchoose.on('click',function(){
            var $checked=$gdlist.find(':checked');
            var $yixuan=$checked.closest('li');
            var len=$yixuan.length;
            var arr=[];
            $yixuan.get().forEach(function(item,idx){
                arr.push($(item).data());
                console.log(arr);   
            })
            arr.forEach(function(item,idx){
                console.log(item.id)
                var buyList=gainCookie();       
                for(var i=0;i<buyList.length;i++){
                    if(buyList[i].id==item.id){
                        buyList.splice(i,1);
                        document.cookie='goodList='+JSON.stringify(buyList)+'; path=/';
                        render();
                    }
                }               
            }) 
        })

        /*-和+数量*/
        /*四个固定位置修改的数据*/

        $gdlist.on('click','.jian',function(){
            var val=$(this).next().val()*1;
            // if(val<=1){$(this).next()[0].value=1};
            $(this).next()[0].value=val-1;
            if($(this).next()[0].value<=1){$(this).next()[0].value=1}
            var $currentLi=$(this).closest('li');
            var gdsid=$currentLi.data().id;
            var buyList=gainCookie();
            /* 获取修改区域*/   
            var $newprice=$(this).parents().find('.new'+gdsid);
            var $oldprice=$(this).parents().find('.old'+gdsid);
            var $onlysum=$(this).parents().find('.only'+gdsid);
            var total=0; 
            var discount=0;
            var sumprice=0;                        
            for(var i=0;i<buyList.length;i++){
                if(buyList[i].id==gdsid){
                    buyList[i].qty=$(this).next()[0].value*1;
                    document.cookie='goodList='+JSON.stringify(buyList)+'; path=/';
                    if(buyList[i].qty<=1){buyList[i].qty=1;}
                    $newprice[0].innerText='￥'+($(this).next()[0].value*1)*buyList[i].newprice*1;
                    $oldprice[0].innerText='￥'+($(this).next()[0].value*1)*buyList[i].oldprice*1;
                    $onlysum[0].innerText='￥'+($(this).next()[0].value*1)*buyList[i].newprice*1;
                    if(val==0){
                        $newprice[0].innerText='￥'+0;
                        $oldprice[0].innerText='￥'+0;
                        $onlysum[0].innerText='￥'+0;
                    }
                    buyList.forEach(function(item,idx){
                        total+=item.qty*1; 
                        discount+=(item.oldprice-item.newprice)*item.qty;
                        sumprice+=item.newprice*item.qty;            
                    })
                    console.log(buyList)
                         
                    $('#car-main').find('.gnnum')[0].innerText=total;
                    $('#car-main').find('.choose-price b')[0].innerText=total;
                    $('#car-main').find('.choose-price em')[0].innerText='￥'+sumprice;
                    $('#car-main').find('.discount-price i')[0].innerText='￥'+discount;
                    return;    
                }
            }
        })
        $gdlist.on('click','.jia',function(){
            var val=$(this).prev().val()*1;
            $(this).prev()[0].value=val+1;
            var $currentLi=$(this).closest('li');
            var gdsid=$currentLi.data().id;
            var buyList=gainCookie();
            var total=0; 
            var discount=0;
            var sumprice=0;
            /* 获取修改区域*/   
            var $newprice=$(this).parents().find('.new'+gdsid);
            var $oldprice=$(this).parents().find('.old'+gdsid);
            var $onlysum=$(this).parents().find('.only'+gdsid);
            for(var i=0;i<buyList.length;i++){
                if(buyList[i].id==gdsid){ 
                    buyList[i].qty=val+1;
                    document.cookie='goodList='+JSON.stringify(buyList)+'; path=/';
                    $newprice[0].innerText='￥'+(val+1)*buyList[i].newprice*1;
                    $oldprice[0].innerText='￥'+(val+1)*buyList[i].oldprice*1;
                    $onlysum[0].innerText='￥'+(val+1)*buyList[i].newprice*1;
                    console.log(buyList)
                         
                    buyList.forEach(function(item,idx){
                        total+=item.qty*1; 
                        discount+=(item.oldprice-item.newprice)*item.qty*1;
                        sumprice+=item.newprice*item.qty*1;            
                    }) 
                    console.log(discount)
                         
                    $('#car-main').find('.gnnum')[0].innerText=total;
                    $('#car-main').find('.choose-price b')[0].innerText=total;
                    $('#car-main').find('.choose-price em')[0].innerText='￥'+sumprice;
                    $('#car-main').find('.discount-price i')[0].innerText='￥'+discount;
                    return;  
                }
            }
        })
        /*输入框文本改变时候*/
        $gdlist.on('change','.changenum input',function(){       
            this.value=this.value;
            if(this.value<=1){this.value=1;}
            // this.innerText;
            var $currentLi=$(this).closest('li');
            var gdsid=$currentLi.data().id;
            var buyList=gainCookie();
            /* 获取修改区域*/   
            var $newprice=$(this).parents().find('.new'+gdsid);
            var $oldprice=$(this).parents().find('.old'+gdsid);
            var $onlysum=$(this).parents().find('.only'+gdsid);
            var total=0;
            var discount=0;
            var sumprice=0;
            for(var i=0;i<buyList.length;i++){
                if(buyList[i].id==gdsid){
                    buyList[i].qty=this.value;
                    document.cookie='goodList='+JSON.stringify(buyList)+'; path=/';
                    $newprice[0].innerText='￥'+(this.value*1)*buyList[i].newprice*1;
                    $oldprice[0].innerText='￥'+(this.value*1)*buyList[i].oldprice*1; 
                    $onlysum[0].innerText='￥'+(this.value*1)*buyList[i].newprice*1;
                    buyList.forEach(function(item,idx){
                        total+=item.qty*1; 
                        discount+=(item.oldprice-item.newprice)*item.qty*1;
                        sumprice+=item.newprice*item.qty*1;       
                    })
                    $('#car-main').find('.gnnum')[0].innerText=total;
                    $('#car-main').find('.choose-price b')[0].innerText=total;
                    $('#car-main').find('.choose-price em')[0].innerText='￥'+sumprice;
                    $('#car-main').find('.discount-price i')[0].innerText='￥'+discount;
                    return;   
                }
            }              
        })
    })
})