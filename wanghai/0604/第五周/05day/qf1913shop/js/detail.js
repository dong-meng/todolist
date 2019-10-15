// 检索 location 中 url中query（疑问）部分
let id = window.location.search

const reg = /id=(\d+)/

// 获得商品详情的 盒子
const container = document.querySelector('.container')

if (!reg.test(window.location.search)) {
    container.innerHTML = `
<div class="jumbotron">
<h1>我是商品详情页</h1>
<p>你还没有商品可浏览</p>
<p>请返回列表选择商品</p>
<p><a class="btn btn-primary btn-lg" href="../pages/list.html" role="button">列表页面</a></p>
</div>
`
} else {
    // 获得商品的 id 信息
    let id = reg.exec(window.location.search)[1]
        // 利用 id 获得商品详细信息
    getDetail(id)
}

async function getDetail(id) {
    const res = await pAjax({
        url: '../server/getDetail.php',
        dataType: 'json',
        data: {
            id: id
        }
    })
    console.log(res)
        // 利用 id 获取的商品渲染页面
    bindHtml(res.detail)
}

function bindHtml(data) {

    container.innerHTML = `
    <div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">商品详细信息</h3>
    </div>
    <div class="panel-body">
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="${data.goods_big_logo}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">${data.goods_name}</h4>
                <p>
                    <i class="glyphicon glyphicon-yen"></i>
                    <span>${data.goods_price}</span>
                </p>
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-default">XL</button>
                    <button type="button" class="btn btn-default">L</button>
                    <button type="button" class="btn btn-default">M</button>
                    <button type="button" class="btn btn-default">S</button>
                    <button type="button" class="btn btn-default">XS</button>
                </div>
                <p>
                    <a href="javascript:;" class="btn btn-warning btn-lg" role="button">立即购买</a>
                    <a href="#" id="addCart" data-id="${data.goods_id}" class="btn btn-danger btn-lg" role="button">加入购物车</a>
                </p>
            </div>
        </div>
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">商品详情</a></li>
            <li role="presentation"><a href="#">商品参数</a></li>
            <li role="presentation"><a href="#">相关商品</a></li>
        </ul>
        <div>
            ${data.goods_introduce}
        </div>
    </div>
</div>
    `
        // 添加购物车 点击事件

    bindEvent(data)
}

function bindEvent(data) {
    // 获得 添加购物车 按钮
    const addCart = document.querySelector('#addCart')

    addCart.addEventListener('click', function() {
        // 自定义在 “添加购物车” 按钮加自定义属性 data-id===data.goods_id

        // 判断账号登陆就添加购物车  不然就返回登陆
        // 利用 cookie 判断是否登陆 
        // 我么自己封装的 getCookie() 函数  login标识

        let login = getCookie('login')

        if (!login) {
            // 无登陆
            alert('请先登录账户')
            window.location.href = '../pages/login.html?pathname=' + window.location
        } else {

            // console.log(data)
            // 获取 localStore 里的购物车信息
            const cartList = JSON.parse(localStorage.getItem('cartList')) || []
                // cartList 空就证明购物车空  反之反然
            console.log(cartList.length)
            if (!cartList.length) {
                // 无数据
                console.log(data)
                    // data.cart_number = data.cart_number - 0 + 1
                cartList.push(data)
                    // bindHtml(cartList)
            } else {
                // 有数据
                // 遍历里面的数据 判断有没有我当前要加的这一条
                // some(只要有一个就为ture)  every(全有为ture)
                const isCart = cartList.some(item => {
                        return item.goods_id === data.goods_id
                    })
                    // 自己存一条验证  localStorage 只能存 json 格式字符串
                    // localStorage.setItem('cartList', JSON.stringify(cartList))

                if (!isCart) {
                    // 没有我这一条
                    data.cart_number = data.cart_number - 0 + 1
                    console.log(data)
                    cartList.push(data)
                } else {
                    // 有我这条
                    // 遍历 查找 id 一样的这项  让这项 +1
                    cartList.forEach(item => {
                        if (item.goods_id === data.goods_id) {
                            item.goods_id = item.goods_id - 0 + 1
                        }
                    })
                }
            }
            // window.location.href = '../pages/cart.html'
        }


    })

}