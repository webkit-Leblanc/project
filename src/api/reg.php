<?php 
    require('connect.php');
    $username=isset($_GET['username']) ? $_GET['username'] : null;
    $password=isset($_GET['password']) ? $_GET['password'] : null;
    // $res=$conn->query('select * from reg');
    // // 得到数组
    // $row=$res->fetch_all(MYSQL_ASSOC);
    // var_dump($row);
    $data_name=$conn->query("select * from reg where username='$username'");
   /* 判断用户名是否存在*/
    if($data_name->num_rows==0){
        if($password==null){
            echo 'success';
        }else{
            $data_psw=$conn->query("select * from reg where password='$password'");
            $sql="insert into reg(username,password) value('$username','$password')";
            /* 获取数组 */
            $res=$conn->query($sql);
            if($res){
                echo "success";
            }else{
                echo "fail";
            }
        }
    }else{
        echo "fail";
    }
   

 ?>