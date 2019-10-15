/**
 * setCookie()  设置 cookie 和 值 和 时效性
 * @param {STRIND} key   你要储存的 cookie 的名称
 * @param {STING} value  你要储存的 cookie 的值
 * @param {INT} expires  cookie 的值存多久（时效性） 秒 为单位
 */
//  设置 cookie 
function setCoofie(key, value, expires) {
    var time = new Date()
    var t1 = time.getTime() - 1000 * 60 * 60 * 60 * 8 //获得中国时区
    time.setTime(t1)

    document.cookie = `${key}=${value};expires=${expires?time : ''}`
}


/**
 * getCookie()  获得指定的 cookie 的值
 * @param {STRING} key   //  你要获取的 cookie 属性名
 * @return {STRING} value 就是你要获取的 cookie 属性的值
 */
// 获得 cookie 
function getCookie(key) {
    // 获得 cookie 并放在 arr 数组 
    var arr = document.cookie.split('; ')
        // 准备 value 接收 cookie 的值
    var value = ''
    if (arr[0]) {
        arr.forEach(item => {
            var re = item.split('=')
            if (re[0] === key) {
                value = re[1]
            }
        })
    }
    return value
}


/**
 * delCookie() 删除指定的 cookie 值
 * @param {STRING} key // 你要删除的 cookie 的属性名 
 */
function delCookie(key) {
    setCookie(key, 'suibian', -1) //只要小于当前时间
}