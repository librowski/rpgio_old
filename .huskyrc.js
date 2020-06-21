module.exports = {
    hooks: {
        'pre-push': `
            yarn lint:ts --fix &&
            yarn lint:css &&
            yarn test`
    }
}