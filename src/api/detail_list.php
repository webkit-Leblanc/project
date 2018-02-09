<?php 
    require('connect.php');
    $keyword=isset($_GET['keyword']) ? $_GET['keyword'] : '';
    $skip=isset($_GET['skip']) ? $_GET['skip'] : false;
    $gain=isset($_GET['gain']) ? $_GET['gain'] : false;
    /*判断是否跳转 nav部分*/
    if($skip==true){
        $sql="select * from goodslist where category like '%$keyword%'";
        $res=$conn->query($sql);
        if($res->num_rows>0){
            echo "OK";
        }
    }
    /*nav跳转之发送数据*/
    $pageNo=isset($_GET['pageNo']) ? $_GET['pageNo'] : false;
    $qty=isset($_GET['qty']) ? $_GET['qty'] : false;
    if($gain==true){
        $sql="select * from goodslist where category like '%$keyword%'";
        $res=$conn->query($sql);
        if($res->num_rows>0){
            $row=$res->fetch_all(MYSQL_ASSOC);
            // echo json_encode($row,JSON_UNESCAPED_UNICODE); 
            /*处理这部分数据进行分页 */
            // var_dump($row);
            /*新建一个关联数组*/
            $refer=array(
                'data'=>array_slice($row,($pageNo-1)*$qty,$qty),
                'qty'=>$qty*1,
                'pagenum'=>$pageNo*1,
                'total'=>count($row)
                );
            echo json_encode($refer,JSON_UNESCAPED_UNICODE);
        }
    }
    // 判断是否跳转到详情页
    $id=isset($_GET['id']) ? $_GET['id'] : 1;
    $detail=isset($_GET['detail']) ? $_GET['detail'] : false;
    if($detail==true){
        $sql="select * from goodslist where id='$id'";
        $res=$conn->query($sql);
        if($res->num_rows>0){
            echo "OK";
        }
    }
    $hot=isset($_GET['hot']) ? $_GET['hot'] : false;
    if($hot==true){
        $sql="select * from goodslist where id='$id'";
        $res=$conn->query($sql);
        if($res->num_rows>0){
            echo "hot";
        }
    }
    // 详情获取对应id的商品
    $only=isset($_GET['only']) ? $_GET['only'] : false;
    if($only==true){
        $sql="select * from goodslist where id='$id'";
        $res=$conn->query($sql);
        if($res->num_rows>0){
            $row=$res->fetch_all(MYSQL_ASSOC);
            echo json_encode($row,JSON_UNESCAPED_UNICODE);  
        }
    }
    /*列表页跳转到详情页*/
    $litode=isset($_GET['litode']) ? $_GET['litode'] : false;
    if($litode==true){
        $sql="select * from goodslist where id='$id'";
        $res=$conn->query($sql);
        if($res->num_rows>0){
            echo "OK";
        }
    }
    /*添加到购物车 返回一个数组回去*/
    $addcar=isset($_GET['addcar']) ? $_GET['addcar'] : false;
    if($addcar==true){
        $sql="select * from goodslist where id='$id'";
        $res=$conn->query($sql);
        if($res->num_rows>0){
            $row=$res->fetch_all(MYSQL_ASSOC);
            echo json_encode($row,JSON_UNESCAPED_UNICODE);  
        }
    }


    



 ?>