//请求页面信

// 准备一个数据对象

const pageInfo = {
    pagenum: 1,
    pagesize: 16, //  一个页 有多少个  页按钮
    total: 0, //总的多少条
    totalpage: 0, //分成多少页
}

// 发送请求
getList()
async function getList() {
    const res = await pAjax({
            url: '../server/getList.php',
            dataType: 'json',
            data: {
                pagenum: pageInfo.pagenum,
                pagesize: pageInfo.pagesize
            }
        })
        // 请求回来的数据复制给我们设置的
        // console.log(res)
    pageInfo.total = res.total //公多少数据
    pageInfo.totalpage = Math.ceil(res.total.count / pageInfo.pagesize) //共多少页

    bindPage()
    bindHtml(res.list)
}

// 生成分页器
// 获得分页器盒子

const box = document.querySelector('.pagi')
const bindPage = function() {
    new Pagination(box, {
        pageInfo: pageInfo,
        textInfo: {
            first: '首页',
            prev: '上一页',
            next: '下一页',
            last: '末页',
        },
        async change(n) {
            if (n === pageInfo.pagenum) return

            pageInfo.pagenum = n
            const res = await pAjax({
                    url: '../server/getList.php',
                    dataType: 'json',
                    data: {
                        pagenum: pageInfo.pagenum,
                        pagesize: pageInfo.pagesize
                    }
                })
                // 请求回来的数据复制给我们设置的
                // console.log(res)
            pageInfo.total = res.total //公多少数据
            pageInfo.totalpage = Math.ceil(res.total.count / pageInfo.pagesize) //共多少页

            bindHtml(res.list)
        }

    })
}

// 渲染页面
// 获得列表盒子
const list_group = document.querySelector('.list_group')

function bindHtml(list) {
    // console.log(list[0])
    let str = ''
    list.forEach(item => {
        str += `
        <li class="list-item">
        <div class="panel panel-primary">
            <div class="panel-body">
                <ol class="breadcrumb">
                    <li><a href="#">${item.cat_one_id}</a></li>
                    <li><a href="#">${item.cat_two_id}</a></li>
                    <li class="active">${item.cat_three_id}</li>
                </ol>
            </div>
            <div class="panel-footer">
                <div class="row">
                    <div class="">
                        <div class="thumbnail">
                            <img src="${item.goods_big_logo}">
                            <div class="caption">
                                <h3>${item.goods_name}</h3>
                                <p class="price">
                                    <i class="glyphicon glyphicon-yen"></i>
                                    <span>${item.goods_price}</span>
                                </p>
                                <p><a href="javascript:;" class="btn btn-primary" role="button">查找相似商品</a> 
                                <a href="../pages/detail.html?id=${item.goods_id}" class="btn btn-danger" role="button">查看商品详情</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `
    });
    list_group.innerHTML = str
}