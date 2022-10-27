module.exports = {
    publicPath: import.meta.env.NODE_ENV === 'production'
        ? './' // prod
        : '/', // dev
}
