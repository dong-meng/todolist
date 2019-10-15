function pagination(ele, option) {
    this.ele = ele //接收这个元素
    this.option = option || {} // 接收配置信息

    // 我们自己设置默认值
    this.default = {
            pageInfor: {
                pageFir: 80, //首页
                pageSize: 15, //每页多少
                pageNum: 100, //有多少页
                textNum: 1000 //有多少数据
            },
            textInfor: {
                first: '首页',
                pre: '上一页',
                list: '',
                next: '下一页',
                last: '末页'
            }
        }
        // 引进函数
    this.intin()
        // 点击事件
    this.dianji()

}
// 装载函数的国度函数
pagination.prototype.intin = function() {
    // 让页码框为空 为接下来从新熏染做准备
    this.ele.innerHTML = ''
        // 创建 div 内元素
    this.createEle()
        // 生成 list 页码表
    this.creList()
        // 当为首末页和当前页时  禁止点击上下和当前页
    this.pro()
}

// 在pagination内生成添加 textInfor内的标签
pagination.prototype.createEle = function() {
    for (let attr in this.default.textInfor) {
        const div = document.createElement('div')
        div.className = attr
        div.innerHTML = this.default.textInfor[attr]
        if (attr !== 'list') {
            setCss(div, {
                border: '1px solid #333',
                margin: '0 5px',
                padding: '0 5px'
            })
        } else {
            this.list = div
            setCss(div, {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            })
        }
        this.ele.appendChild(div)
    }

}

// 提取了一个专门用来创建 li 的函数
pagination.prototype.crealeP = function(i) {
    // i 形参就是要拿到循环中的 i 我好渲染文字
    // 和当前页面进行比较
    const p = document.createElement('p')

    p.innerHTML = i
    setCss(p, {
        border: '1px solid #333',
        margin: '0 5px',
        padding: '0 5px'
    })

    if (i === this.default.pageInfor.pageFir) {
        setCss(p, {
            backgroundColor: 'orange'
        })
    }

    return p
}

// 判断分页器并生成效果
pagination.prototype.creList = function() {
    // 当页码小于 9 时
    if (this.default.pageInfor.textNum <= 9) {
        for (let i = 1; i <= this.default.pageInfor.pageNum; i++) {
            this.list.appendChild(this.crealeP(i))
        }
    } else {
        // 当前页码 < 5      1 2 3 4 5 ...99 100
        // 当前页码 === 5   1 2 3 4 5 6 7 ... 99 100
        // 当前页码 > 5 && < 总数 - 4    1 2 ... 4 5 6 7 8 ... 99 100
        // 当前页码 === 总数 - 4  1 2 ... 94 95 96 97 98 99 100
        // 当前页码 > 总数 - 4  1 2 ... 96 97 98 99 100
        if (this.default.pageInfor.pageFir < 5) {
            for (let i = 1; i <= 5; i++) {
                this.list.appendChild(this.crealeP(i))
            }
            const span = document.createElement('span')
            span.innerHTML = '...'
            this.list.appendChild(span)
            for (let i = this.default.pageInfor.pageNum - 1; i <= this.default.pageInfor.pageNum; i++) {
                this.list.appendChild(this.crealeP(i))
            }
        } else if (this.default.pageInfor.pageFir === 5) {
            for (let i = 1; i <= 7; i++) {
                this.list.appendChild(this.crealeP(i))
            }
            const span = document.createElement('span')
            span.innerHTML = '...'
            this.list.appendChild(span)
            for (let i = this.default.pageInfor.pageNum - 1; i <= this.default.pageInfor.pageNum; i++) {
                this.list.appendChild(this.crealeP(i))
            }
        } else if (this.default.pageInfor.pageFir > 5 && this.default.pageInfor.pageFir < this.default.pageInfor.pageNum - 4) {
            for (let i = 1; i <= 2; i++) {
                this.list.appendChild(this.crealeP(i))
            }
            const span = document.createElement('span')
            span.innerHTML = '...'
            this.list.appendChild(span)
            for (let i = this.default.pageInfor.pageFir - 2; i <= this.default.pageInfor.pageFir + 2; i++) {
                this.list.appendChild(this.crealeP(i))
            }
            const span2 = document.createElement('span')
            span2.innerHTML = '...'
            this.list.appendChild(span2)
            for (let i = this.default.pageInfor.pageNum - 1; i <= this.default.pageInfor.pageNum; i++) {
                this.list.appendChild(this.crealeP(i))
            }
        } else if (this.default.pageInfor.pageFir >= this.default.pageInfor.pageNum - 4) {
            for (let i = 1; i <= 2; i++) {
                this.list.appendChild(this.crealeP(i))
            }
            const span = document.createElement('span')
            span.innerHTML = '...'
            this.list.appendChild(span)
            for (let i = this.default.pageInfor.pageFir - 2; i <= this.default.pageInfor.pageNum; i++) {
                this.list.appendChild(this.crealeP(i))
            }
        }
    }

}

// 点击事件  利用委托事件
pagination.prototype.dianji = function() {
    const _this = this;

    this.ele.addEventListener('click', e => {
        e = e || window.event
        if (e.target.className === 'first' && _this.default.pageInfor.pageFir !== 1) {
            _this.default.pageInfor.pageFir = 1
            this.intin()

        }
        if (e.target.className === 'pre' && _this.default.pageInfor.pageFir !== 1) {
            _this.default.pageInfor.pageFir--
                this.intin()

        }
        if (e.target.className === 'next' && _this.default.pageInfor.pageFir !== _this.default.pageInfor.pageNum) {
            _this.default.pageInfor.pageFir++
                this.intin()

        }
        if (e.target.className === 'last' && _this.default.pageInfor.pageFir !== _this.default.pageInfor.pageNum) {
            _this.default.pageInfor.pageFir = _this.default.pageInfor.pageNum - 0
            this.intin()
        }
        if (e.target.nodeName === 'P') {
            _this.default.pageInfor.pageFir = e.target.innerHTML - 0
            this.intin()
        }

    })
}

// 当为首末页和当前页时  禁止点击上下和当前页
pagination.prototype.pro = function() {
    if (this.default.pageInfor.pageFir === 1) {
        this.ele.children[0].style.backgroundColor = '#333'
        this.ele.children[1].style.backgroundColor = '#333'
    }
    if (this.default.pageInfor.pageFir === this.default.pageInfor.pageNum) {
        this.ele.children[3].style.backgroundColor = '#333'
        this.ele.children[4].style.backgroundColor = '#333'
    }
}


// 设置 css 属性
function setCss(ele, option) {
    for (let attr in option) {
        ele.style[attr] = option[attr]
    }
}