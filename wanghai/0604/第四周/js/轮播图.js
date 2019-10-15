function banner(ele, potion) {
    this.ele = ele
    this.potion = potion || {}
    this.default = {
        picNum: 7,
    }
    this.ul = this.ele.querySelector('ul')
    picNum = this.default.picNum;
    this.timer = null;
    this.k = 0
        // =生成 spic
    this.setPic()
        // =生成焦点
    this.point()
        // 图片动起来
    this.lis = document.querySelectorAll('ol>li')
    this.picMove()
        // 点击 《  》时
    this.dianji()
        // 移入移出事件 
    this.bindEvent();
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

// 根据 pic 生成焦点
banner.prototype.point = function() {
    for (let i = 0; i < this.default.picNum; i++) {
        const oli = document.createElement('li')
        ol.appendChild(oli)
        oli.setAttribute('index', i)
        if (i === 0) {
            oli.className = 'active'
        }
        const banWid = parseInt(window.getComputedStyle(this.ele).width)
        ol.style.left = banWid / 4 + 'px'
    }
}

// 让图片动起来
banner.prototype.picMove = function() {
    const banWid = parseInt(window.getComputedStyle(this.ele).width)
        // const lis = document.querySelectorAll('ol>li')
    this.timer = setInterval(fn = () => {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].classList = ''
        }
        this.lis[this.k].className = 'active'
        this.k++
            if (this.k >= this.default.picNum) {
                this.k = 0
            }
        ul.style.left = -(this.k * banWid) + 'px'
    }, 1000)
}

// 移入移出事件 
banner.prototype.bindEvent = function() {
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
    let _this = this;
    const banWid = parseInt(window.getComputedStyle(this.ele).width)
    left.onclick = () => {
        --_this.k
        for (let i = 0; i < _this.default.picNum; i++) {
            this.lis[i].classList = ''
        }

        if (_this.k < 0) {
            _this.k = 6
        }
        this.lis[_this.k].className = 'active'
        ul.style.left = -(_this.k * banWid) + 'px'
    }
    right.onclick = () => {
        ++_this.k
        for (let i = 0; i < _this.default.picNum; i++) {
            this.lis[i].classList = ''
        }

        if (_this.k > _this.default.picNum - 1) {
            _this.k = 0
        }
        this.lis[_this.k].className = 'active'
        ul.style.left = -(_this.k * banWid) + 'px'
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
            ul.style.left = -(i * banWid) + 'px'
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