class Person {
    constructor(ele, options) {
            this.ele = ele
            this.options = options || '' //兼容不传参的时候

            this.default = {
                pageInfo: {
                    pagenum: 1, // 首页在哪
                    pagesize: 11, //一页有几个分页码
                    total: 1000, // 一个多少页
                    totalpage: 100, //分成多少页
                },

                textInfo: {
                    first: "fiert",
                    prve: "prve",
                    list: '',
                    next: "next",
                    last: "last",
                }
            }

            // 接口函数 init
            this.init()

            var $p = ($('li'))
            console.log($p)
        }
        // 接口函数 init
    init() {
        // 统一数据
        this.setDefault()

        // 给盒子设置样式
        this.setBoxStyle()

        // 给 li 添加事件
        this.liCklick()
    }


    // // 判断传参数据 同意数据
    setDefault = function() {
        // 判断 default.pageInfo 并统一
        if (this.options.pageInfo) {
            for (let key in this.options.pageInfo) {
                this.default.pageInfo[key] = this.options.pageInfo[key]
            }
        }
        // 判断 default.textInfo 并统一
        if (this.options.textInfo) {
            for (let key in this.options.textInfo) {
                this.default.textInfo[key] = this.options.textInfo[key]
            }
        }
    }


    // 给盒子设置样式
    setBoxStyle() {
        $(this.ele).html('')
        $(this.ele).css({
            // width: 900,
        })

        for (let key in this.default.textInfo) {
            if (key === 'list') {
                $(this.ele).append($('<ul></ul>'))
                $('ul').addClass(key).css({
                    heigth: $(this.ele).height(),
                }).addClass('active')
            } else {
                $(this.ele).append($('<div>' + key + '</div>').addClass(key))
                $(this.ele).find('div').addClass('active').css({
                    border: '1px solid gray',
                })
            }
        }

        // 生成 list 样式
        this.setList()
    }

    // 生成 list 样式
    setList() {

        const pagenum = this.default.pageInfo.pagenum
        const totalpage = this.default.pageInfo.totalpage

        if (totalpage <= 9) { // 小于九个直接渲染
            for (let i = 1; i <= 9; i++) {
                $('ul').append('<li>' + i + '</li>')
                $('li').addClass('setLi')
                    // $('li').eq(pagenum).addClass('dian')

            }
        } else { // 大于九个分成几个步骤来渲染
            if (pagenum < 5) {
                // 1 2 3 4 5 ... 99 100
                for (let i = 1; i <= 5; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    console.log(this)
                    $('li').eq(pagenum).addClass('dian')
                }

                $('ul').append('<span>...</span>')

                for (let i = totalpage - 1; i <= totalpage; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(pagenum).addClass('dian')

                }
            } else if (pagenum === 5) {
                // 1 2 3 4 5 6 7 ... 99 100
                for (let i = 1; i <= 7; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(pagenum).addClass('dian')


                }

                $('ul').append('<span>...</span>')

                for (let i = totalpage - 1; i <= totalpage; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(pagenum).addClass('dian')

                }

            } else if (pagenum > 5 && pagenum < totalpage - 4) {
                for (let i = 1; i <= 2; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').eq(5).addClass('dian')

                }

                $('ul').append('<span>...</span>')

                for (let i = pagenum - 2; i <= pagenum + 2; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(5).addClass('dian')

                }

                $('ul').append('<span>...</span>')

                for (let i = totalpage - 1; i <= totalpage; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(5).addClass('dian')

                }
            } else if (pagenum === totalpage - 4) {
                for (let i = 1; i <= 2; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(pagenum).addClass('dian')

                }

                $('ul').append('<span>...</span>')

                for (let i = totalpage - 6; i <= totalpage; i++) {
                    $('ul').append('<li class=' + i + '>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(pagenum).addClass('dian')


                }

            } else if (pagenum > totalpage - 4) {
                for (let i = 1; i <= 2; i++) {
                    $('ul').append('<li>' + i + '</li>')
                    $('li').addClass('setLi')
                    $('li').eq(pagenum).addClass('dian')


                }

                $('ul').append('<span>...</span>')

                for (let i = totalpage - 4; i <= totalpage; i++) {
                    $('ul').append('<li>' + i + '</li>')
                    $('li').attr('class', "setLi")
                    $('li').eq(pagenum).addClass('dian')


                }
            }
        }
        // if (agenum === i) {

        // }
        return $('li')

    }

    // 给 li 添加事件
    liCklick() {
        this.ele.addEventListener('click', (e) => {
            e = e || window.e
            if (e.target.className === "first active") {
                this.default.pageInfo.pagenum = 1
                this.setBoxStyle()

            }
            if (e.target.className === "prve active") {
                this.default.pageInfo.pagenum -= 1
                this.setBoxStyle()

            }
            if (e.target.className === "next active") {
                this.default.pageInfo.pagenum += 1
                this.setBoxStyle()

            }
            if (e.target.className === "last active") {
                this.default.pageInfo.pagenum = this.default.pageInfo.totalpage
                this.setBoxStyle()

            }
            if (e.target.nodeName === "LI") {
                // this.default.pageInfo.pagenum = $('li').attr('index')

                this.setBoxStyle()

            }
        })
    }













    // 生成 list 样式
    // setList() {
    //     if (this.default.pageInfo.totalpage <= this.default.pageInfo.pagesize) {
    //         // 总页小于11时
    //         for (let i = 1; i <= this.default.pageInfo.totalpage; i++) {
    //             $('ul').append('<li>' + i + '</li>')
    //             $('li').addClass('active').css({
    //                 height: 20,
    //                 width: 20,
    //                 border: '1px solid gray'
    //             })
    //         }
    //     } 
    // }

}