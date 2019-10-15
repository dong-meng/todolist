function banner(ele, potion) {
    this.ele = ele
    this.potion = potion || {}
    this.default = {
        picNum: 7,
    }
    this.banWid = parseInt(window.getComputedStyle(this.ele).width)

    this.ul = this.ele.querySelector('ul')
    this.k = 1
    this.timer = null;

    // =生成 spic
    this.setPic()

    // =生成焦点
    this.point()

    // 图片动起来
    this.lis = document.querySelectorAll('ol>li')
    this.picMove()

    // cop
    this.copPic()

    // 点击 《  》时
    this.dianji()

    // 移入移出事件 
    this.overOUT();

    // 点击 point 焦点事件
    this.Dpoint()


}
// 生成装图片的 li
banner.prototype.setPic = function() {
    for (let i = 0; i < this.default.picNum; i++) {
        const li = document.createElement('li')
        this.ul.appendChild(li) //
        li.setAttribute('idx', i)
        li.innerHTML = i
        li.style.backgroundColor = getColor()
        li.style.width = 400 + 'px'
        li.style.height = 400 + 'px'
    }
}

// 克隆第一张和最后一张图
banner.prototype.copPic = function() {
    const first = this.lis[0].cloneNode(true)
    const last = this.lis[this.default.picNum - 1].cloneNode(true)
    ul.appendChild(first)
    ul.insertBefore(last, ul.children[0])
}

// 根据 pic 生成焦点
banner.prototype.point = function() {
    for (let i = 0; i < this.default.picNum; i++) {
        const oli = document.createElement('li')
        ol.appendChild(oli)
        oli.setAttribute('index', i)
        if (i === 0) {
            oli.className = 'active'
        }
        ol.style.left = this.banWid / 4 + 'px'
    }
}

// 让图片动起来
banner.prototype.picMove = function() {
    const Athis = this
    this.timer = setInterval(fn = () => {

        move(Athis.ul, { left: -(Athis.k - 1) * Athis.banWid }, Athis.bindEvent(Athis))
            // console.log(Athis.k)
        Athis.k++
    }, 1000)
}

// 运动结束之后的函数
banner.prototype.bindEvent = function() {
    for (let i = 0; i < this.lis.length; i++) {
        this.lis[i].classList = ''
    }
    this.lis[this.k - 1].className = 'active'
    if (this.k >= this.default.picNum) {
        this.k = 0
    }
    if (this.k < 0) {
        this.k = this.default.picNum - 1
        this.picMove()
    }
    console.log(this.k)

}

// 移入移出事件 
banner.prototype.overOUT = function() {
    let _this = this;
    this.ele.addEventListener('mouseover', () => {
        left.style.display = right.style.display = 'block'
        clearInterval(this.timer)
    })

    this.ele.addEventListener('mouseout', () => {
        left.style.display = right.style.display = 'none'
        this.picMove()
    })
}

// 点击 《 》时
banner.prototype.dianji = function() {
    left.onclick = () => {
        if (this.k < 0) {
            this.k = this.default.piceNum - 1
        }
    }
    right.onclick = () => {
        this.pivMove(true)
    }
}

// 点击 point 焦点时
banner.prototype.Dpoint = function() {
    const banWid = parseInt(window.getComputedStyle(this.ele).width)
    for (let i = 0; i < this.lis.length; i++) {
        this.lis[i].onclick = () => {
            for (let k = 0; k < this.lis.length; k++) {
                this.lis[k].classList = ''
            }
            this.lis[i].className = 'active'
            ul.style.left = -(i * this.banWid) + 'px'
            this.k = i
        }
    }
}


// 随机数
function fn(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}

// 随机颜色
function getColor() {
    return `rgb(${fn(0,255)},${fn(0,255)},${fn(0,255)})`
}