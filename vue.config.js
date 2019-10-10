module.exports = {
    devServer: {
        proxy: {
            '/suiyi': {
                target: 'http://47.95.207.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/suiyi': ''
                }
            }
        }
    },
}