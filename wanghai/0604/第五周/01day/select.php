<?php

header('content-type:text/html;charset=utf-8;');

mysql_connect('127.0.0.1','root','root');

mysql_select_db('qf1913');

# 查看
// $sql='SELECT*FROM `student`';
// $sql='SELECT * FROM `STUDENT` WHERE `gender`="男"';
// $sql='SELECT * FROM `student` LIMIT 0,10';
// $sql='SELECT * FROM `student` WHERE `name` LIKE "%三%"';
// $sql='SELECT * FROM `student` ORDER BY `age` ASC';
// $res=mysql_dump($sql);

// $ralt=mysql_fetch_row($res);

// $dataArr=array();

// while($ralt){
// array_push($dataArr,$ralt);
// $ralt=mysql_fetch_row($res);
// }

// print_r(json_encode($dataArr));



# 增加
// $sql='INSERT INTO `student` VALUES(null,"张三",28,"男",1913,80)';
// $sql='INSERT INTO `student` (`name`,`age`) VALUES ("二郎神",2888)';
// $res=mysql_query($sql);

// if(!$res){
// die('error for mysql:' .mysql_error());
// }
// print_r($res)

# 删除
// $sql='DELETE FROM `student` WHERE `name`="张三" AND `age`=18';
// $res=mysql_query($sql);

// if(!$res){
// die('error for mysql:' .mysql_error());
// }
// print_r($res);

# 修改
// $sql='UPDATE `student` SET `name`="哮天犬", `age`=2688 WHERE `id`=1029';
$res=mysql_query($sql);
if(!$res){
die('error for mysql:'.mysql_error());
}
print_r($res);

?>