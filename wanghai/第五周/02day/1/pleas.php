<?php

header('content-type:text/html;charset=utf-8;');

$username=$_POST['username'];
$password=$_POST['password'];

mysql_connect('localhost','root','root');
#ques 操作的 库
mysql_select_db ('qf1913');
// $sql='SELECT * FROM `user`';

# 判断 用户名 和 密码 并准备 sql 语句
$sql="SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";

$res=mysql_query($sql);
print_r($res);
// # 解析 mysql_query() 语句结果
$re=mysql_fetch_assoc($res);
// var_dump($re);


// if(!$re){
// echo '密码和用户名有误';
// }else{
// setCookie('login',1);
// header('location: ./firs.html');
// }

?>