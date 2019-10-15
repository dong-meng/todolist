<?php

header('content-type:text/html;charset=utf-8;');

$conn=mysql_connect('localhost','root','root');
mysql_select_db('qf1913');
#获得用户信息
$username=$_POST['username'];
$password=$_POST['password'];

$sql="SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";
# 执行 $sql 并解析
$relt=mysql_query($sql);

if(!relt){
die('error for mysql:' . mysql_error());
}
$row = mysql_fetch_assoc($relt);

if(!$row){
echo '密码或用户名错误';
}else{
    setCookie('login',1);
    header('location: ./acrt.html');
}

?>