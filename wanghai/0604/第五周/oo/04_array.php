<?php

# php 的数组
# php 没有对象这个东西

# 索引型数组
$arr = array(1, 2, 3); # 等价于 [1, 2, 3]

// var_dump($arr);

# 关联型数组
$arr2 = array('name' => 'Jack', 'age' => 18); # 等价于 { name: 'Jack', age: 18 }

// var_dump($arr2);

# $arr2 就是我们理解意义上的对象
# 访问成员不能 点
# 只能用 ['成员名称']

// var_dump($arr2['name']);


# 将来我们是要和 php 交互

# 每一个语言都已一套自己转 json 的方法

# php 转换 json 格式使用的是
# json_encode  =>  把自己的数据类型转成 json 格式的字符串
# json_decode  =>  把 json 格式的字符串转成给自己的数据类型

$str = json_encode($arr2);

var_dump(json_decode($str));
?>
