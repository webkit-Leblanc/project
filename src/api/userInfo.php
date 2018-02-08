<?php 

    $usename= isset($_POST['usename']) ? $_POST['usename'] : 'xiaoke';
    $password= isset($_POST['password']) ? $_POST['password'] : 123456;
    /*新数组*/
    $new=array('usename'=>$usename,'password'=>$password);
    echo json_encode($new);
    
    /*打开 读取 json文件*/
    $path='data/userInfo.json';
    $file=fopen($path, 'r');
    $content=fread($file, filesize($path));
    fclose($file);
    $obj=json_decode($content);
    array_unshift($obj, $new);
    $writeNew=json_encode($obj,JSON_UNESCAPED_UNICODE);
    /*写*/
    $file1=fopen($path, 'w');
    fwrite($file1,$writeNew);
    fclose($file1);
    /*输出新数组json*/
    echo $writeNew;

 ?>