const { ApiError } = require('../rest')

module.exports = [
  {
    method: 'get',
    path: '/api/*',
    func: async (ctx, next) => {
      throw new ApiError('Not Found')
    }
  },
  {
    method: 'post',
    path: '/api/*',
    func: async (ctx, next) => {
      throw new ApiError('Not Found')
    }
  }
]
