module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        ns: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }

    return config
  },

  images: {
    domains: ['img-a.udemycdn.com','img-b.udemycdn.com']
  }
}

