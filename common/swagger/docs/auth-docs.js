module.exports = {
  '/auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login',
      operationId: 'Login',
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/LoginRequest'
            },
            example: {
              userName: 'userName',
              password: '123ABCabc'
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
                  _id: '5f1c86a3c1b4a922cd788e1c',
                  email: 'test@yahoo.com',
                  legalId: '12345678',
                  civilId: '121213',
                  roles: ['BUSINESS_ADMIN'],
                  token:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFjODZhM2MxYjRhOTIyY2Q3ODhlMWMiLCJpYXQiOjE1OTY3NjU1MDIsImV4cCI6MTU5Nzk3NTEwMn0.2fzwciCg8EvGpLpIOi13jJn9WFwCnBT2AT1c_xuG1SE',
                  businessId: '5f1c86a3c1b4a922cd788e1d'
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
  },
  '/auth/business/signup': {
    post: {
      tags: ['Auth'],
      summary: 'Business Signup',
      operationId: 'BusinessSignup',
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/BusinessSignupRequest'
            },
            example: {
              name: 'test mail',
              email: 'mail@outlook.com',
              phoneNumber: '11111111111110',
              userName: 'test',
              password: '123ABCabc',
              legalId: '12343678',
              civilId: '121313',
              address: {
                province: 'test province',
                city: 'test city',
                addressLine: 'test addressLine'
              },
              business: {
                name: 'mail business',
                type: '3412',
                accountNumber: '123456787690',
                webSite: 'https://chargebackhelp.com',
                mpgs: {
                  userName: 'merchant.ISCTEST001',
                  password: '6d6fbe1d12ddaf707db27dc4e7047558'
                },
                locationNumber: '36882774',
                terminalId: '574256',
                permissions: {
                  cards: ['QI_CARD', 'MASTER_CARD'],
                  currency: ['IQD', 'USD'],
                  QILimit: {
                    IQD: 11000
                  },
                  MCLimit: {
                    IQD: 11000,
                    USD: 11000
                  },
                  isVoidAllowed: true,
                  isRefoundAllowed: true,
                  isDispatchingAllowed: true
                }
              }
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
                  _id: '5f2cb5b197cfc05c7d4f1cee',
                  name: 'test',
                  email: 'test@yahoo.com',
                  legalId: '12345678',
                  civilId: '121213',
                  roles: ['BUSINESS_ADMIN'],
                  token:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjJjYjViMTk3Y2ZjMDVjN2Q0ZjFjZWUiLCJpYXQiOjE1OTY3NjY0NzcsImV4cCI6MTU5Nzk3NjA3N30.-7BhHsX2EkLBATh0GSQdtuxAcsY9qJHrZlzRETZi3R0',
                  businessId: '5f2cb5b197cfc05c7d4f1cef'
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
