// 获取DOM元素
const banner_box = document.querySelector('.banner_box')
const pic_box = document.querySelector('ul')
const pic = document.querySelectorAll('ul>li')
const point = document.querySelector('ol')
const left = document.querySelector('.ontabs_left')
const right = document.querySelector('.ontabs_right')
    // 复制第一和最后的pic
cop()
    // 根据 pic 动态写出焦点
pointCop()
    // 图片自动循环
dongci()

// 获得 pic 的宽度
const picWidth = parseInt(banner_box.clientWidth)
    // 克隆图片的 li 
function cop() {
    const firstPic = pic_box.children[0].cloneNode(true)
    const lastPic = pic_box.children[pic.length - 1].cloneNode(true)

    pic_box.appendChild(firstPic)
    pic_box.insertBefore(lastPic, pic_box.children[0])
}

// 添加 piont 焦点
function pointCop() {
    for (let i = 0; i < pic.length; i++) {
        const li = document.createElement('li')
        if (i === 0) {
            li.className = 'active'
        }
        point.appendChild(li)
        point.style.width = pic.length * 25 + 'px'
    }
}

// 图片循环函数
let k = 0
    // 获得焦点下的 li
const point_li = document.querySelectorAll('ol>li')

function dongci() {
    let timer = setInterval(function move() {
        point_li[k].className = ''
        k++
        pic_box.style.left = -(picWidth * (k + 1)) + 'px'
        if (k >= pic.length) {
            k = 0
        }
        point_li[k].classList = 'active'
    }, 1000)

    // 当鼠标划入时 循环定时器停止
    banner_box.addEventListener('mouseover', function stop() {
        clearInterval(timer)
    })
}
// 当鼠标移除时 定时器正常运行
banner_box.addEventListener('mouseout', function start() {
    dongci()
})

// 点击 tabs.left/right 时图片（pic）动起来
left.onclick = function() {
    k++
    if (k > pic.length) {
        k = 1
    }
    pic_box.style.left = -(picWidth * k) + 'px'
}
right.onclick = function() {
    k--
    if (k <= 0) {
        k = pic.length
    }
    pic_box.style.left = -(picWidth * k) + 'px'
}

// 点击 point焦点时  pic 跟着变化
for (let i = 0; i < point_li.length; i++) {
    point_li[i].onclick = function() {
        for (let j = 0; j < point_li.length; j++) {
            point_li[j].className = ''
        }
        pic_box.style.left = -((i + 1) * picWidth) + 'px'
        point_li[i].classList = 'active'
    }
}