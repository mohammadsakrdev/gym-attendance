module.exports = {
  '/attendance/user/check-in': {
    post: {
      tags: ['Attendance'],
      summary: 'User check in',
      operationId: 'USercheckin',
      parameters: [],
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: true,
                message: 'You checked in successfully',
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
  '/attendance/user/check-out': {
    put: {
      tags: ['Attendance'],
      summary: 'User check out',
      operationId: 'Usercheckout',
      parameters: [],
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: true,
                message: 'You checked out successfully',
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
  '/attendance/user': {
    get: {
      tags: ['Attendance'],
      summary: 'User list attendance',
      operationId: 'Userlistattendance',
      parameters: [
        {
          in: 'query',
          name: 'page',
          minimum: 1,
          default: 1,
          schema: {
            type: 'integer'
          },
          description: 'The page number'
        },
        {
          in: 'query',
          name: 'limit',
          minimum: 1,
          maximum: 50,
          default: 25,
          schema: {
            type: 'integer'
          },
          description: 'The numbers of items to return'
        },
        {
          name: 'from',
          in: 'query',
          description: 'Start Date',
          required: false,
          style: 'form',
          explode: true,
          schema: {
            type: 'integer',
            example: 1594144905
          }
        },
        {
          name: 'to',
          in: 'query',
          description: 'End date',
          required: false,
          style: 'form',
          explode: true,
          schema: {
            type: 'integer',
            example: 1599609600
          }
        }
      ],
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: true,
                message: 'Done successfully',
                data: {
                  count: 2,
                  limit: 25,
                  page: 1,
                  pages: 1,
                  list: [
                    {
                      _id: '5f678c270648e125ddd53e10',
                      checkIn: '2020-09-20T17:06:16.738Z',
                      createdAt: '2020-09-20T17:06:47.426Z',
                      updatedAt: '2020-09-20T17:06:54.465Z',
                      checkOut: '2020-09-20T17:06:54.465Z'
                    },
                    {
                      _id: '5f678c150648e125ddd53e0f',
                      checkIn: '2020-09-20T17:06:16.738Z',
                      createdAt: '2020-09-20T17:06:29.040Z',
                      updatedAt: '2020-09-20T17:06:38.697Z',
                      checkOut: '2020-09-20T17:06:38.696Z'
                    }
                  ]
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
