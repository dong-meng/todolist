// 获得div ul li ol li  的DOM元素
const div = document.querySelector('div')
const Right = document.getElementById('right')
const Left = document.getElementById('left')
const ul = document.querySelector('ul')
const ol = document.querySelector('ol')
const ul_lis = document.querySelectorAll('ul>li')
const ol_lis = document.querySelectorAll('ol>li')
const non = document.getElementsByClassName('non')
    // 创建函数
var ulLeft, ulTop
var i = 0,
    j = ul_lis.length - 2,
    k = 2
    // var dis = window.getComputedStyle(Left).display
    // console.log(dis)
    // 获得ul 下的li数组

window.onload = function() {
    bind()

    function bind() {
        const arr = []
        ul_lis.forEach(function(item) {
                arr.push(item)
            })
            // 给 div 绑定 mousemove 事件
        div.onmousemove = function(e) {
                e = e || window.event
                var x = e.clientX - this.offsetLeft
                var y = e.clientY - this.offsetTop
                    // 判断显示左右按键
                if (x < div.clientWidth / 2) {
                    Left.style.display = "block"
                    Right.style.display = "none"
                    Left.style.opacity = 0.5
                }
                if (x >= div.clientWidth / 2) {
                    Right.style.display = "block"
                    Left.style.display = "none"
                    Right.style.opacity = 0.5
                }

            }
            // 点击左右交换图片时
        Left.addEventListener('click', function() {
            k++
            ul_lis[i].style.zIndex = k
            i += 1
            if (i > ul_lis.length - 1) {
                i = 0
            }
            console.log(k)
        })
        Right.addEventListener('click', function() {
                k++
                ul_lis[j].style.zIndex = k
                if (j <= 0) {
                    j = ul_lis.length
                }
                j -= 1
            })
            // 移除事件 mouseout 
        div.onmouseout = function() {
            Left.style.display = "none"
            Right.style.display = "none"
        }

        // 给 ol的 li 绑定事件
        ol_lis.forEach(function(item) {
            item.onclick = function() {
                var idx = this.getAttribute('idx')
                k++
                arr[idx].style.zIndex = k
                if (this !== item) {
                    item.style.opacity = 50
                }

            }
        })


        // 结尾
    }
}