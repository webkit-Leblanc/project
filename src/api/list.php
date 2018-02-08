<?php 
    require('connect.php');
    $sql="select * from goodslist";
    // $res=$sql->query($sql);
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
    $res=$conn->query($sql);
    // 得到数组
    $row=$res->fetch_all(MYSQL_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    
 ?>