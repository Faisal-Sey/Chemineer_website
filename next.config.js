
/** @type {import('next').NextConfig} */
const fs = require('fs')
const nextConfig = {
  reactStrictMode: true,
  env: {
    jqueryBundle: fs.readFileSync('./assets/js/jquery.bundle.js').toString(),
    Scripts: fs.readFileSync('./assets/js/scripts.js').toString()
  }
}

module.exports = nextConfig

