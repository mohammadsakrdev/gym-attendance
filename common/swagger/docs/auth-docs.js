module.exports = {
  '/auth/user/signup': {
    post: {
      tags: ['Auth'],
      summary: 'Signup',
      description: 'USer signup',
      operationId: 'Signup',
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SignupRequest'
            },
            example: {
              name: 'test',
              email: 'test@yahoo.com',
              phoneNumber: '+2019273656',
              userName: 'test',
              password: 'abcABC123'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: true,
                message: 'Done successfully',
                data: null
              }
            }
          }
        },
        400: {
          description: 'Bad request'
        },
        500: {
          description: 'Server Error'
        },
        401: {
          description: 'UnAuthorized',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: false,
                message: 'Unauthorized',
                data: null
              }
            }
          }
        }
      },
      deprecated: false
    }
  },
  '/auth/user/login': {
    post: {
      tags: ['Auth'],
      summary: 'User Login',
      description: 'User login with his userName & password',
      operationId: 'UserLogin',
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UserLoginRequest'
            },
            example: {
              userName: 'test',
              password: 'abcABC123'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: true,
                message: 'User logged in successfully',
                data: {
                  _id: '5f67858104ab66124b21bedc',
                  name: 'test',
                  email: 'test@yahoo.com',
                  roles: ['USER'],
                  token:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjY3ODU4MTA0YWI2NjEyNGIyMWJlZGMiLCJpYXQiOjE2MDA2MTk5ODQsImV4cCI6MTYwMTgyOTU4NH0.FWnajXq6ZyANnXzzPid7Drx9UI7hz5nBbKHlJSpOdss'
                }
              }
            }
          }
        },
        400: {
          description: 'Bad request'
        },
        500: {
          description: 'Server Error'
        },
        401: {
          description: 'UnAuthorized',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: false,
                message: 'Unauthorized',
                data: null
              }
            }
          }
        }
      },
      deprecated: false
    }
  }
};
