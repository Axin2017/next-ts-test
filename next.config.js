const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')

// https://github.com/vercel/next-plugins/tree/master/packages/next-sass
module.exports = withTypescript(
  withSass({
    /* config options here */
  })
)
