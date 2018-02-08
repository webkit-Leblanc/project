require(['config'],function(){
    require(['jquery','define_self','common'],function($,define){
        var $login=$.find('#l-main'); 

        switch($login.length){
        /*注册页面的js写这里*/
        case 0:
            // $.get(define.reg_yinjin($)).then(
            //     function(){
            //         $regname=$('#reg-main .same form .login-input .inp-box input');
            //         $tips=$('#reg-main .same form .login-input .title div.tips');
            //         console.log($tips)
            //         $tips.css('display','none');   
            //         console.log($regname[0].value)
            //         $regname.change(function(){
            //             if(!/^1[34578]\d{9}$/.test($regname[0].value)){
            //             $tips.css('display','block');
            //             $tips.text('手机号码不合法');
            //             }else{$tips.css('display','none')}     
            //         })
            //     })
            // console.log(define.reg_yinjin($))
            // var promise=new Promise(function(resolve,reject){
            //     resolve(function(){
            //         define.reg_yinjin($);
            //     })
            // }).then(function(){
            //         $regname=$('#reg-main .same form .login-input .inp-box input');
            //         $tips=$('#reg-main .same form .login-input .title div.tips');
            //         console.log($tips)
            //         console.log(555)
            //  }
            // )
            $('#l-top').load('login_reg_same.html .l-top');
            $('#l-bottom').load('login_reg_same.html .l-bottom');

            $inps=$('#reg-main .same .inp-box input');
            $tips=$('#reg-main .same .tips');     
            $spans=$('#reg-main').find('.gou');       
            $spans.css('display','none');
            $tips.css('display','none'); 
            function isEmail(str){
                var isEmail=false;
                if(str.match(/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,})+$/)){
                    isEmail=true;
                }
                return isEmail;
            }
            function isTel(num){
                var isTel=false;
                if(num.match(/^1[34578]\d{9}$/)){
                    isTel=true;
                }
                return isTel;        
            }
           /* 手机邮箱*/
            function username(){
                var username=$inps[0].value;
                $.ajax({
                    url:'../api/reg.php',
                    type:'GET',
                    data:{'username':username},
                    success:function(data){
                        if(data=='success'){
                             $spans[0].style.display='block'; 
                        }else{
                            $tips.css('display','block');
                            $tips.text('手机/电子邮箱已被注册');   
                        }
                    }
                }) 
            }
            $inps[0].onchange=function(){
                $($spans[0]).css('display','none');
                $($tips[0]).css('display','none');   
                var email_tf=isEmail($inps[0].value);
                var tel_tf=isTel($inps[0].value);
                var letter=/[a-z]/i.test($inps[0].value);
                if(letter){ 
                    if($inps[0].value.indexOf('@')>=0){
                        if(email_tf){
                            username();
                            return true;
                        }
                        else{
                            $tips.css('display','block');
                            $tips.text('电子邮箱不合法');   
                        }
                    }else{
                        $tips.css('display','block');
                        $tips.text('电子邮箱不合法');  
                    }
                }else{
                    if(tel_tf){
                        username();
                        return true;
                    }else{
                        $tips.css('display','block');
                        $tips.text('手机号码不合法');
                    }
                   
                }
            } 
            /*密码强度*/
            $qiangdu=$("#reg-main").find('.qiangdu') 
            $inps[1].onchange=function(){
                if(/^\d{6,}$/.test($inps[1].value)){
                    $qiangdu.css({
                        'display':'block',
                        'backgroundColor':'red',
                        'width':'33'
                    }).text('弱'); 
                    return true;         
                }
                else if(/^[\da-zA-Z]{6,}$/.test($inps[1].value)){
                    $qiangdu.css({
                        'display':'block',
                        'backgroundColor':'orange',
                        'width':'66'
                    }).text('一般');
                    return true;          
                }
                else if(/^[\da-zA-Z@#$%^&!]{6,}$/.test($inps[1].value)){
                    $qiangdu.css({
                        'display':'block',
                        'backgroundColor':'#58BC58',
                        'width':'100'
                    }).text('强');
                    return true;            
                }else if($inps[1].value==''){
                    $qiangdu.css({
                        'display':'block',
                        'backgroundColor':'#fff',
                        'width':'100',
                        'color':'#000'
                    }).text('密码不能为空'); 
                }       
                else{
                   $qiangdu.css({
                        'display':'block',
                        'backgroundColor':'#fff',
                        'width':'150',
                        'color':'#000'
                    }).text('密码长度不能低于5个字符'); 
                }
            }
            /*密码判断*/
            $inps[2].onchange=function(){
                if($inps[1].value==$inps[2].value){
                    $($spans[1]).css('display','block').removeClass('add').addClass('gou').text('');
                    return true;
                }else{               
                    $($spans[1]).removeClass('gou').addClass('add').text('密码错误').css('display','block');
                }
            }
            $vcode=$('#reg-main').find('#vCode');
            $scode=$('#reg-main').find('#sCode');
            $scode.text(yanzhengma());
            /*刷新验证码*/
            $scode.on('click',function(){
                $scode.text(yanzhengma());
            })
            $vcode[0].onchange=function(){
                $($spans[2]).css('display','none');
                if($vcode[0].value.toLowerCase()==$scode[0].innerText.toLowerCase()){
                    $($spans[2]).css('display','block').removeClass('add').addClass('gou').text(''); 
                    return true;
                }else{
                    $($spans[2]).css('display','block').removeClass('gou').addClass('add').text('验证码错误');   
                }
            }

            $refer=$('#reg-main').find('#refer');
            ckbox=$('#reg-main').find('.ckbox');
            $refer.on('click',function(){
                if(($inps[0].onchange())&&($inps[1].onchange())&&($inps[2].onchange())&&($vcode[0].onchange())&&(ckbox.prop('checked',true))){
                    console.log('登录成功');
                    /*密码正确是否请求，存进数据库*/
                    var username=$inps[0].value;
                    var psw=$inps[2].value;
                    console.log(username,psw)
                    $.ajax({
                        url:'../api/reg.php',
                        type:'GET',
                        data:{'username':username,'password':psw},
                        success:function(data){
                            console.log(data)
                            if(data=='success'){
                                location.href="http://localhost:10086/src/";
                            }
                        }
                    })                
                }
                else{
                    $tips.css('display','block');
                    $tips.text('信息不完整');     
                }
                return false;            
            });
            break;
        /*登录页面的js写这里*/
        case 1:
            $('#l-top').load('login_reg_same.html .l-top');
            $('#l-bottom').load('login_reg_same.html .l-bottom');
            $username=$('#l-main').find('#usename');
            $psw=$('#l-main').find('#psw');
            $login=$('#l-main').find('#login');  
            $ckbox=$('#l-main').find('[type=checkbox]'); 
            $tips=$('#l-main .same .tips'); 
            console.log($tips);
                         
            $login.on('click',function(){
                username=$username.val();
                psw=$psw.val();
                console.log(username,psw)
                $.ajax({
                    url:'../api/login.php',
                    type:'GET',
                    data:{
                        username:username,
                        password:psw
                    },
                    success:function(data){
                        console.log(data)
                        if(data=='noexit'){
                            $tips.css('display','block');
                            $tips.text('用户名不存在');
                        }else if(data=='success'){
                           location.href="http://localhost:10086/src/"; 
                        }else if(data=='fail'){
                            $tips.css('display','block');
                            $tips.text('密码错误,请重新输入');
                        }    
                    }
                })
                return false;

                /*  判断是否勾选复选框(自动登录)*/
                if($ckbox.prop('checked')==true){
                    var now = new Date();
                    now.setDate(now.getDate()+7);
                    document.cookie='usename='+usename+';expires='+now.toUTCString();
                    document.cookie='password='+psw+';expires='+now.toUTCString();
                }        
            })
            /*cookie的读取*/
            var cookies=document.cookie;
            cookies=cookies.split('; ');
            cookies.forEach(function(item,idx){
                var arr=item.split('=');
                if(arr[0]=='usename'){
                    // location.href="http://localhost:10086/src/";
                }
            })
                     
                // return false;     
            break;      
        }
    })
})