// window.location.search
// 在加入购物车时  也要验证是否登陆
// 因为在登陆时 我们有设置 cookie   所以这里就利用 cookie 验证
const login = getCookie('login')
if (!login) {
    window.location.href = '../pages/login.html?pathname=' + window.location.href
}