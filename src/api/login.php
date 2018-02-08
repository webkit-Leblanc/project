<?php 
    require('connect.php');
    $username=isset($_GET['username']) ? $_GET['username'] : null;
    $password=isset($_GET['password']) ? $_GET['password'] : null;
    /*查询*/
    // $sql="select * from reg where username='$username' and password='$password'";
    $sql_name="select * from reg where username='$username'";
    $res_name=$conn->query($sql_name);
    if($res_name->num_rows==0){
        echo "noexit";    
    }else if($res_name->num_rows>0){
        $sql_all="select * from reg where username='$username' and password='$password'";
        $res_all=$conn->query($sql_all);
        if($res_all->num_rows>0){
            echo "success";
        }else{
            echo "fail";
        }
        $res_all->free();
    }
    /*获取查询结果*/
    // $res=$conn->query($sql);
    // if($res->num_rows>0){
    //     echo "sunccess";
    // }else{
    //     echo "fail";
    // }
    /*释放内存*/
    $res_name->free();
    /*关闭连接*/
    $conn->close();


 ?>