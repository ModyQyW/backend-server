const { ApiError } = require('../rest')

const login = async ctx => {
  const username = ctx.request.body.username
  const password = ctx.request.body.password
  if (username && password && username === password) {
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
  } else if (!username || !password) {
    throw new ApiError('Username and password are required!')
  } else {
    throw new ApiError('Username and password aren\'t matched')
  }
}

const logout = async ctx => {
  ctx.rest({})
}

const renew = async ctx => {
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
    method: 'post',
    path: '/auth/login',
    func: login
  },
  {
    method: 'post',
    path: '/auth/logout',
    func: logout
  },
  {
    method: 'post',
    path: '/auth/renew',
    func: renew
  }
]
