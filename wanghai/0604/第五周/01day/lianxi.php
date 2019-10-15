<?php
#能认识汉字
header('content-type:text/html;charset=utf-8;');
#链接到Apach的 www （服务器）
$conn=mysql_connect('localhost','root','root');
#选择确定操作哪一个库
mysql_select_db('qf1913');
#准备一个 sql 语句
$sql='SELECT * FROM `student`';
# mysql_query() 执行 sql 语句
$res=mysql_query($sql);

if(!$res){
die();
}
// var_dump ($res);

$re=mysql_fetch_row($res);
$ralt=mysql_fetch_assoc($res);
// var_dump($ralt);

$dataArr=array();
while($ralt){
 array_push($dataArr,$ralt);
 $ralt=mysql_fetch_assoc($res);
}

print_r(json_encode($dataArr));
// $num=100;
// echo $num;

?>