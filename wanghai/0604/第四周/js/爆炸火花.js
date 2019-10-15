class Fire {
    constructor(ele) {
        this.ele = ele

        this.Elebind()
    }
    Elebind() {
            // 绑定点击事件 生成小火花
            this.ele.addEventListener('click', e => {
                e = e || window
                const x = e.offsetX
                const y = e.offsetY

                const p = document.createElement('p')
                p.style.position = 'absolute'
                p.style.bottom = 0 + 'px'
                p.style.left = x + 'px'
                p.style.backgroundColor = getColor()
                this.ele.appendChild(p)

                this.skyFir(x, y)
            })
        }
        // 小火花升空
    skyFir(x, y) {
        const p = document.createElement('p')
        p.style.top = y + 'px'
        p.style.left = x + 'px'
        p.backgroundColor = getColor()
        this.ele.appendChild(p)
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