// (function() {
const utils = (function() {

        class Abc {

            constructor() { //写在 class 自定义函数内
                    this.Flag = addEventListener
                }
                // 设置元素 css 属性
            setCss(ele, options) {
                console.log('woshi')
                for (let attr in options) {
                    ele.style[attr] = options[attr]
                }
            }

            // 获得非行间样式
            getStyle(ele, attr) {
                if (this.flag.Flag) {
                    return window.getComputedStyle[ele][attr]
                } else {
                    return ele.currentStyle[attr]
                }
            }

            //  绑定事件
            on(ele, type, cb) {
                if (this.Flag) {
                    ele.addEventListener(typs, cb)
                } else {
                    ele.attachEvent(type, cb)
                }
            }


        }



        let instance

        return function() {
            if (!instance) {
                instance = new Abc()
            }
            return instance
        }
    })()
    // 执行 Utils()  就得到 instance  即实列对象

// })()