 function Enlarge(ele) {
     this.ele = ele

     console.log(this)

     //  获得属性
     const mo = document.querySelector('.mo')
     const pic = document.querySelector('.pic')
     const smPic = document.querySelector('.smPic')
     const bigPic = document.querySelector('.bigPic')
     this.getSize(mo, pic, bigPic)
         //  控制 mo 
     this.moOver(pic)
 }

 //  控制 mo 上午移入移出事件
 Enlarge.prototype.moOver = function(pic) {
     const mo = document.querySelector('.mo')
     pic.onmouseover = () => {
         mo.style.display = 'block'
         this.fn(pic)
     }
     pic.onmouseout = function() {
         mo.style.display = 'none'
     }
 }

 // 按 mo/pic=bigPic/bgSize 算出 bigPic 的尺寸
 Enlarge.prototype.getSize = function(mo, pic, bigPic) {
     // 获得 mo 的宽高
     const moWid = parseInt(window.getComputedStyle(mo).width)
     const moHei = parseInt(window.getComputedStyle(mo).height)
         //  获得 pic 的宽高
     const picWid = parseInt(pic.clientWidth)
     const picHei = parseInt(pic.clientHeight)
         //  获得 bigSize 的宽高
     const bgSizeWid = parseInt(window.getComputedStyle(bigPic).backgroundSize.split('px')[0])
     const bgSizeHei = parseInt(window.getComputedStyle(bigPic).backgroundSize.split('px')[1])
         // 给 bigPic 框赋值
     bigPic.style.width = moWid / picWid * bgSizeWid + 'px'
     bigPic.style.height = moHei / picHei * bgSizeHei + 'px'
 }

 // 点击拖动 mo 
 Enlarge.prototype.fn = function(pic) {
     const mo = document.querySelector('.mo')
         //  mo 的高宽
     const moWid = mo.clientWidth
     const moHei = mo.clientHeight
         //  获得 bigSize 的宽高
     const bigPic = document.querySelector('.bigPic')
     const bgSizeWid = bigPic.clientWidth
     const bgSizeHei = bigPic.clientHeight
     console.log(bgSizeWid)
         //  pic 的高宽
     const picWid = pic.clientWidth
     const picHei = pic.clientHeight
     pic.onmousemove = (e) => {
         e = e || window.event
             //  原始 0 点
         let startX = e.pageX - this.ele.offsetLeft - moWid / 2
         let startY = e.pageY - this.ele.offsetLeft - moHei / 2
         if (startX <= 0) {
             startX = 0
         }
         if (startY <= 0) {
             startY = 0
         }
         if (startX + moWid >= picWid) {
             startX = picWid - moWid
         }
         if (startY + moHei >= picHei) {
             startY = picHei - moHei
         }
         mo.style.left = startX + 'px'
         mo.style.top = startY + 'px'
             //  console.log(startX)
         let x = startX / moWid * bgSizeWid
         let y = startY / moHei * bgSizeHei
         bigPic.style.backgroundPosition = `-${x}px -${y}px`
     }
 }