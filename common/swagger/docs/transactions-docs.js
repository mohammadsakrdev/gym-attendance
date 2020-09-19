module.exports = {
  '/transactions/business/token': {
    post: {
      tags: ['Transaction'],
      summary: 'Business Request Token',
      operationId: 'MerchantRequestToken',
      parameters: [],
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/MerchantRequestTokenRequest'
            },
            example: {
              order: {
                amount: 110000,
                currency: 'USD',
                orderId: '25417878804200'
              },
              timestamp: '2020-07-12T21:54:08.664Z',
              successUrl: 'https://www.google.com',
              failureUrl: 'https://youtube.com',
              cancelUrl: 'https://example.com/cancel',
              dispatching: [
                {
                  institutionId: '001',
                  amount: 1500
                }
              ]
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
                data: {
                  link:
                    'https://pay-uat.qi.iq?authToken=80abb26218b44358b78a68dfb1eb6300',
                  token: '80abb26218b44358b78a68dfb1eb6300',
                  transactionId: '838258291439',
                  orderId: '254178788004200090',
                  '3DSecureId': '40f98f1d62f2477291c3e3d0b3b386e5'
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
  '/transactions/business/is-valid': {
    post: {
      tags: ['Transaction'],
      summary: 'Check wether the token is still valid or not',
      operationId: 'IsTokenValid',
      security: [
        {
          PayKeyAuth: []
        }
      ],
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/IsTokenValidRequest'
            },
            example: {
              token: '39c2652c64f44314a6460689b84c1efc'
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
                message: 'Token is valid',
                data: {
                  failureUrl: 'https://youtube.com',
                  cancelUrl: 'https://example.com/cancel',
                  isValid: true,
                  amount: 110000,
                  currency: 'USD'
                }
              }
            }
          }
        },
        400: {
          description: 'Bad request',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: false,
                message: 'Transaction token not found',
                data: {
                  failureUrl: null,
                  cancelUrl: null,
                  isValid: false
                }
              }
            }
          }
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
  '/transactions/business/mpgs/proceed': {
    post: {
      tags: ['Transaction'],
      summary: 'Proceed transaction',
      security: [
        {
          PayKeyAuth: []
        }
      ],
      operationId: 'Proceedtransaction',
      parameters: [
        {
          name: 'X-AUTH-PAY',
          in: 'header',
          description: '',
          required: true,
          style: 'simple',
          schema: {
            type: 'string',
            example: '75be12c502f04fb7bb1253d9bd594d2b'
          }
        }
      ],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ProceedtransactionRequest'
            },
            example: {
              token: 'b2269b3ae7db47e783b08c790902731f',
              cardType: 2,
              card: {
                cardHolder: 'test',
                number: '5123450000000008',
                month: '11',
                year: '23',
                cvv: '123'
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
                message: 'Done successfully',
                data: {
                  formData: {
                    PaReq:
                      'eAFVUdtOwkAQfTfhH5rGR+3ObkEbMixB0AjeCJdEHks7oVV6cVsE/94pFNA+bHrO7Dk7cwa7u2RtfZMp4izt2NIB26I0yMI4XXXs+ezh2rO7unGBs8gQDaYUbAxpfKGi8FdkxSFrPOW2pAe2xnFvQl8aazvNbo5CcYSsMkHkp6VGP/i6G75q5YJ0JYoaYkJmONDDaX92P50BcOXAYOonpPv+JxVRlqPYQwyyTVqaH+3eeCiOADdmraOyzIu2ENvt1qGdn+RrcoIsQVEVUZz7GG+qjgqeaBeH+nk5mizjNzN/un/3xqPVR9ifTBY3ahFBB0V1A0O/JK1AAXhwa4FsN1UbXBR7Hv2kaknPpwPrUkq4AgAHgOc78JhXz/UOgOv7D8VfFjlfwwv40V6ThSeEtMuzlNicAz39ozgP0H+sYg1KDrAlldtsHez55HTqQuUSc2LKlZxtDVBUUlHvjsPZr5aZfytvXPwCfaux7w==',
                    echoForm:
                      'https://mtf.gateway.mastercard.com/acs/MastercardACS/ed02ea67-e2dd-4ef5-835b-edb535590c36',
                    termUrl:
                      'https://pay-uat.qi.iq:5050/api/v0/transactions/mpgs/3DSecure/d2794098036a41cdb11bce3e2ebc9d1a',
                    md: ''
                  },
                  failureUrl: null,
                  error: null,
                  pay: null
                }
              }
            }
          }
        },
        400: {
          description: 'Bad request',
          headers: {},
          content: {
            'application/json': {
              example: {
                success: false,
                message: 'Failed',
                data: {
                  formData: null,
                  failureUrl:
                    'https://youtube.com?authToken=80abb26218b44358b78a68dfb1eb6300&CartID=254178788004200090&auth_status=2',
                  pay: null,
                  error: {
                    cause: 'INVALID_REQUEST',
                    explanation:
                      'Value https://pa...fb1eb6300 is invalid. Value is not a properly formed Url',
                    field: '3DSecure.authenticationRedirect.responseUrl',
                    validationType: 'INVALID'
                  }
                }
              }
            }
          }
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
  '/transactions/mpgs/3DSecure/{token}': {
    post: {
      tags: ['Transaction'],
      summary: 'MPGS will call this API to check 3DSecure',
      operationId: 'MPGScheck3DSecure',
      parameters: [
        {
          name: 'token',
          in: 'path',
          description: 'Transaction token',
          required: true,
          style: 'simple',
          schema: {
            type: 'string'
          }
        }
      ],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/MPGScheck3DSecureRequest'
            },
            example: {
              PaRes:
                'eAFVUdtOwkAQfTfhH5rGR+3ObkEbMixB0AjeCJdEHks7oVV6cVsE/94pFNA+bHrO7Dk7cwa7u2RtfZMp4izt2NIB26I0yMI4XXXs+ezh2rO7unGBs8gQDaYUbAxpfKGi8FdkxSFrPOW2pAe2xnFvQl8aazvNbo5CcYSsMkHkp6VGP/i6G75q5YJ0JYoaYkJmONDDaX92P50BcOXAYOonpPv+JxVRlqPYQwyyTVqaH+3eeCiOADdmraOyzIu2ENvt1qGdn+RrcoIsQVEVUZz7GG+qjgqeaBeH+nk5mizjNzN/un/3xqPVR9ifTBY3ahFBB0V1A0O/JK1AAXhwa4FsN1UbXBR7Hv2kaknPpwPrUkq4AgAHgOc78JhXz/UOgOv7D8VfFjlfwwv40V6ThSeEtMuzlNicAz39ozgP0H+sYg1KDrAlldtsHez55HTqQuUSc2LKlZxtDVBUUlHvjsPZr5aZfytvXPwCfaux7w=='
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
  '/transactions/business/dashboard/{type}': {
    get: {
      tags: ['Transaction'],
      summary:
        'Business dashboard view transactions hourly, weekly and monthly',
      operationId: 'Merchantdashboardfortransactions',
      security: [
        {
          BearerAuth: []
        }
      ],
      parameters: [
        {
          name: 'type',
          in: 'path',
          description:
            '-The types:\n * Hourly : 1\n * Weekly : 2\n * Monthly : 3\n',
          required: true,
          style: 'simple',
          schema: {
            type: 'string'
          }
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
                message: 'Success',
                data: [
                  {
                    totalAmount: [
                      {
                        amount: 110000,
                        hour: 14
                      },
                      {
                        amount: 110000,
                        hour: 18
                      }
                    ],
                    failedCount: 1,
                    successCount: 2,
                    transactionsCount: 3,
                    masterCardCount: 2,
                    qiCardCount: 1
                  }
                ]
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
  '/transactions/business': {
    get: {
      tags: ['Transaction'],
      summary: 'Business list transactions',
      operationId: 'Merchantlisttransactions',
      security: [
        {
          BearerAuth: []
        }
      ],
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
                success: true,
                message: 'Done successfully.',
                data: {
                  count: 2,
                  limit: 2,
                  page: 1,
                  pages: 1,
                  list: [
                    {
                      _id: '5f2cb15d35519055b3d9296c',
                      transactionStatus: 3,
                      QIGatewayResponse: 'CHECK_3D',
                      state: 4,
                      businessId: '5f2cb5b197cfc05c7d4f1cef',
                      transactionId: '790818799722',
                      amount: 110000,
                      currency: 'USD',
                      businessTime: '2020-07-12T21:54:08.664Z',
                      orderId: '25417878804200090',
                      successUrl: 'https://www.google.com',
                      failureUrl: 'https://youtube.com',
                      cancelUrl: 'https://example.com/cancel',
                      createdAt: '2020-08-07T01:41:49.873Z',
                      updatedAt: '2020-08-07T01:42:03.840Z',
                      brand: 'MASTER_CARD',
                      cardHolder: 'test',
                      cardType: 2,
                      maskedCardNumber: '5123********0008'
                    },
                    {
                      _id: '5f2ca838eecf70498d1fe3e6',
                      transactionStatus: 2,
                      QIGatewayResponse: 'FAILURE',
                      state: 4,
                      businessId: '5f2cb5b197cfc05c7d4f1cef',
                      transactionId: '838258291439',
                      amount: 110000,
                      currency: 'USD',
                      businessTime: '2020-07-12T21:54:08.664Z',
                      orderId: '254178788004200090',
                      successUrl: 'https://www.google.com',
                      failureUrl: 'https://youtube.com',
                      cancelUrl: 'https://example.com/cancel',
                      createdAt: '2020-08-07T01:02:48.300Z',
                      updatedAt: '2020-08-07T01:35:33.007Z',
                      brand: 'MASTER_CARD',
                      cardHolder: 'test',
                      cardType: 2,
                      errorCause: 'INVALID_REQUEST',
                      errorExplanation:
                        'Value is invalid. Value is not a properly formed Url.',
                      errorField: '3DSecure.authenticationRedirect.responseUrl',
                      errorSupportCode: null,
                      errorValidationType: 'INVALID',
                      maskedCardNumber: '5123********0008',
                      responseCode: 'FAILED',
                      responseExplanation:
                        'The operation was declined or rejected by the gateway, acquirer or issuer'
                    }
                  ]
                }
              }
            }
          }
        }
      },
      deprecated: false
    }
  },
  '/transactions/business/{transactionId}/{orderId}': {
    get: {
      tags: ['Transaction'],
      summary: 'Business get single transaction',
      operationId: 'Businessgettransaction',
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      parameters: [
        {
          name: 'transactionId',
          in: 'path',
          description: 'Transaction Id',
          required: true,
          style: 'simple',
          schema: {
            type: 'string'
          }
        },
        {
          name: 'orderId',
          in: 'path',
          description: 'Order Id',
          required: true,
          style: 'simple',
          schema: {
            type: 'string'
          }
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
                message: 'Done successfully.',
                data: {
                  QIGatewayResponse: 'PENDING',
                  transactionId: '838258291439',
                  amount: 110000,
                  currency: 'USD',
                  businessTime: '2020-07-12T21:54:08.664Z',
                  orderId: '254178788004200090',
                  successUrl: 'https://www.google.com',
                  failureUrl: 'https://youtube.com',
                  cancelUrl: 'https://example.com/cancel',
                  createdAt: '2020-08-07T01:02:48.300Z',
                  updatedAt: '2020-08-07T01:02:48.300Z'
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
  '/transactions/business/qi/verify': {
    post: {
      tags: ['Transaction'],
      summary: 'Verify QI card',
      operationId: 'VerifyQIcard',
      security: [
        {
          PayKeyAuth: []
        }
      ],
      parameters: [
        {
          name: 'X-AUTH-PAY',
          in: 'header',
          description: '',
          required: true,
          style: 'simple',
          schema: {
            type: 'string',
            example: '75be12c502f04fb7bb1253d9bd594d2b'
          }
        }
      ],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/VerifyQIcardRequest'
            },
            example: {
              token: '6e84446ad7f148238510229233dfe75e',
              cardNumber: '6330029166301033',
              cardType: 1,
              cardHolder: 'QI'
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
                message: 'Token has been sent to your phone',
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
  '/transactions/business/qi/confirm': {
    post: {
      tags: ['Transaction'],
      summary: 'Confirm QI Card',
      operationId: 'ConfirmQICard',
      security: [
        {
          PayKeyAuth: []
        }
      ],
      parameters: [
        {
          name: 'X-AUTH-PAY',
          in: 'header',
          description: '',
          required: true,
          style: 'simple',
          schema: {
            type: 'string',
            example: '75be12c502f04fb7bb1253d9bd594d2b'
          }
        }
      ],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ConfirmQICardRequest'
            },
            example: {
              token: '6e84446ad7f148238510229233dfe75e',
              cardNumber: '6330029166301033',
              otp: '9671'
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
                data: {
                  failureUrl: null,
                  error: null,
                  pay: {
                    cardNumber: '6330********1704',
                    paymentDate: '2020-08-08 06:10:04',
                    method: 'QI_CARD',
                    orderId: '25417878804200090',
                    amount: 110000,
                    currency: 'USD',
                    successUrl:
                      'https://www.google.com?authToken=e3eb9e475da247539fd8d3f9093c1b71&CartID=25417878804200090&auth_status=4'
                  }
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
  '/transactions/business/void': {
    post: {
      tags: ['Transaction'],
      summary: 'Void transaction',
      operationId: 'Voidtransaction',
      security: [
        {
          ApiKeyAuth: []
        }
      ],
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/VoidtransactionRequest'
            },
            example: {
              transactionId: '988889',
              orderId: '101109'
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
                message: 'Void done successfully',
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
  }
};
