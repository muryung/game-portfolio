module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/game-portfolio/'
        : '/dist'
}