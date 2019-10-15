<?php

header('content-type:text/html;charset=utf-8;');

$username=$_POST['username'];
$password=$_POST['password'];

$conn=mysql_connect('localhost','root','root');
mysql_select_db('qf1913');
// $sql=" SELECT*FROM `user`";
$sql="SELECT*FROM `user` WHERE `username`='$username' AND `password`='$password' ";
$res=mysql_query($sql);

if(!$res){
die('error for mysql:' . mysql_error());
}
$row=mysql_fetch_assoc($res);

if(!$row){
echo '账号或密码有误';
}else{
    // setcookie('key',1);
    // header('location: ./cart.html');
    echo '登陆成功';
}
?>