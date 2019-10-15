const form = document.querySelector('form')

const inps = document.querySelectorAll('input')

// 添加 submit 事件

form.addEventListener('submit', async e => {
    e = e || window.event
    e.preventDefault()

    let username = inps[0].value
    let password = inps[1].value

    const res = await pAjax({
        url: '../server/login.php',
        dataType: 'json',
        type: 'post',
        data: {
            username,
            password
        }
    })

    // 判断当 "message" => "登录成功" 则登陆
    if (res.message !== "登录成功") {
        alert('账号或密码错误')
        return
    }
    // 登陆
    // 设置 cookie
    setCookie('login', 1)

    // 如果在添加商品是返回 让返回时带着 window.location.href(返回来时的地址)
    // 判断 '../pages/login.html  利用正则判断 (?pathname=' + window.location) 这一截
    const reg = /pathname=(.+)/
    if (reg.test(window.location.search)) {
        let href = reg.exec(window.location.search)[1]
        console.log(href)
        window.location.href = href
    } else {
        window.location.href = '../fir.html'
    }
})