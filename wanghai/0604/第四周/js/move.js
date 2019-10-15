/*
  参数
    元素
    目标位置
    结束后的回调函数

    运动
      当前位置到目标位置的距离 / 运动系数 = 本次运动的距离

      赋值的时候
      当前位置 + 本次应该运动的距离
*/

/**
 * move 运动函数
 * @param {DOM} ele  =>  要运动的 dom 元素
 * @param {OBJECT} target  =>  运动的目标位置
 * @param {FUNCTION} callback  =>  运动结束执行的函数
 */
function move(ele, target, bacF) {
    // 多少定时器
    const obj = {}
    let curAttr
    for (let attr in target) {
        obj[attr] = setInterval(() => {

            // 获得 ele 当前位置  考虑属性为 opacity（值 0--1）
            if (attr === 'opacity') {
                curAttr = parseFloat(getStyle(ele, attr) * 100) //取整
            } else {
                curAttr = parseInt(getStyle(ele, attr)) //取整
            }
            // 计算每次运动距离
            let speed = (target[attr] - curAttr) / 5
                // speed 数据取整 （考虑负数的时候）
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
            if (curAttr === target[attr]) {
                clearInterval(obj[attr])
                    // 删除对象成员
                delete obj[attr]
                    // 判断所有定时器都停了
                if (getTimerLength(obj) === 0) {
                    return bacF && bacF()
                }
            } else {
                if (attr === 'opacity') {
                    ele.style[attr] = (curAttr + speed) / 100
                } else {
                    ele.style[attr] = curAttr + speed + 'px'
                }
            }
        }, 30);
    }
}

/**
 * getAtyle 获取非行间样式
 * @param {DOM} ele  =>  获取哪个元素的非行间样式
 * @param {STRING} attr  =>  获取哪个样式
 * @return {STRING}  =>  你获取到的元素的样式的值
 */
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele)[attr]
    } else {
        return ele.currentStyle[attr]
    }
}
// 辅助判断 obj 内是否还有成员
function getTimerLength(obj) {
    let n = 0
    for (let attr in obj) {
        n++
    }
    return n
}