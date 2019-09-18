const { ApiError } = require('../rest')

const info = async ctx => {
  const xToken = ctx.request.headers['x-token']
  if (xToken) {
    const username = xToken.replace(/\d+/, '')
    const data = {
      token: `${username}${+new Date()}`,
      username,
      nickname: username
    }
    switch (username) {
      case 'admin':
        data.id = 0
        data.role = 0
        break
      case 'manager':
        data.id = 1
        data.role = 1
        break
      case 'user':
        data.id = 2
        data.role = 2
        break
      default:
        throw new ApiError('No account')
    }
    ctx.rest(data)
  } else {
    throw new ApiError('Wrong Token')
  }
}

module.exports = [
  {
    method: 'get',
    path: '/user/info',
    func: info
  }
]
