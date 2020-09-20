module.exports = {
  SignupRequest: {
    title: 'SignupRequest',
    required: ['name', 'email', 'phoneNumber', 'userName', 'password'],
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
      phoneNumber: {
        type: 'string'
      },
      userName: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    example: {
      name: 'test',
      email: 'test@yahoo.com',
      phoneNumber: '+2019273656',
      userName: 'test',
      password: 'abcABC123'
    }
  },
  UserLoginRequest: {
    title: 'UserLoginRequest',
    required: ['userName', 'password'],
    type: 'object',
    properties: {
      userName: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    example: {
      userName: 'test',
      password: 'abcABC123'
    }
  }
};
