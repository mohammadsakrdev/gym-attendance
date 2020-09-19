module.exports = {
  MerchantRequestTokenRequest: {
    title: 'MerchantRequestTokenRequest',
    required: [
      'order',
      'timestamp',
      'successUrl',
      'failureUrl',
      'cancelUrl',
      'dispatching'
    ],
    type: 'object',
    properties: {
      order: {
        $ref: '#/components/schemas/Order'
      },
      timestamp: {
        type: 'string'
      },
      successUrl: {
        type: 'string'
      },
      failureUrl: {
        type: 'string'
      },
      cancelUrl: {
        type: 'string'
      },
      dispatching: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Dispatching'
        },
        description: ''
      }
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
  },
  Order: {
    title: 'Order',
    required: ['amount', 'currency', 'orderId'],
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        format: 'int32'
      },
      currency: {
        type: 'string'
      },
      orderId: {
        type: 'string'
      }
    },
    example: {
      amount: 110000,
      currency: 'USD',
      orderId: '25417878804200'
    }
  },
  Dispatching: {
    title: 'Dispatching',
    required: ['institutionId', 'amount'],
    type: 'object',
    properties: {
      institutionId: {
        type: 'string'
      },
      amount: {
        type: 'integer',
        format: 'int32'
      }
    },
    example: {
      institutionId: '001',
      amount: 1500
    }
  },
  ProceedtransactionRequest: {
    title: 'ProceedtransactionRequest',
    required: ['token', 'cardType', 'card'],
    type: 'object',
    properties: {
      token: {
        type: 'string'
      },
      cardType: {
        type: 'integer',
        format: 'int32'
      },
      card: {
        $ref: '#/components/schemas/Card'
      }
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
  },
  Card: {
    title: 'Card',
    required: ['cardHolder', 'number', 'month', 'year', 'cvv'],
    type: 'object',
    properties: {
      cardHolder: {
        type: 'string'
      },
      number: {
        type: 'string'
      },
      month: {
        type: 'string'
      },
      year: {
        type: 'string'
      },
      cvv: {
        type: 'string'
      }
    },
    example: {
      cardHolder: 'test',
      number: '5123450000000008',
      month: '11',
      year: '23',
      cvv: '123'
    }
  },
  IsTokenValidRequest: {
    title: 'IsTokenValidRequest',
    required: ['token'],
    type: 'object',
    properties: {
      token: {
        type: 'string'
      }
    },
    example: {
      token: '39c2652c64f44314a6460689b84c1efc'
    }
  },
  MPGScheck3DSecureRequest: {
    title: 'MPGScheck3DSecureRequest',
    required: ['PaRes'],
    type: 'object',
    properties: {
      PaRes: {
        type: 'string'
      }
    },
    example: {
      PaRes:
        'eAFVUdtOwkAQfTfhH5rGR+3ObkEbMixB0AjeCJdEHks7oVV6cVsE/94pFNA+bHrO7Dk7cwa7u2RtfZMp4izt2NIB26I0yMI4XXXs+ezh2rO7unGBs8gQDaYUbAxpfKGi8FdkxSFrPOW2pAe2xnFvQl8aazvNbo5CcYSsMkHkp6VGP/i6G75q5YJ0JYoaYkJmONDDaX92P50BcOXAYOonpPv+JxVRlqPYQwyyTVqaH+3eeCiOADdmraOyzIu2ENvt1qGdn+RrcoIsQVEVUZz7GG+qjgqeaBeH+nk5mizjNzN/un/3xqPVR9ifTBY3ahFBB0V1A0O/JK1AAXhwa4FsN1UbXBR7Hv2kaknPpwPrUkq4AgAHgOc78JhXz/UOgOv7D8VfFjlfwwv40V6ThSeEtMuzlNicAz39ozgP0H+sYg1KDrAlldtsHez55HTqQuUSc2LKlZxtDVBUUlHvjsPZr5aZfytvXPwCfaux7w=='
    }
  },
  VerifyQIcardRequest: {
    title: 'VerifyQIcardRequest',
    required: ['token', 'cardNumber', 'cardType', 'cardHolder'],
    type: 'object',
    properties: {
      token: {
        type: 'string'
      },
      cardNumber: {
        type: 'string'
      },
      cardType: {
        type: 'integer',
        format: 'int32'
      },
      cardHolder: {
        type: 'string'
      }
    },
    example: {
      token: '6e84446ad7f148238510229233dfe75e',
      cardNumber: '6330029166301033',
      cardType: 1,
      cardHolder: 'QI'
    }
  },
  ConfirmQICardRequest: {
    title: 'ConfirmQICardRequest',
    required: ['token', 'cardNumber', 'otp'],
    type: 'object',
    properties: {
      token: {
        type: 'string'
      },
      cardNumber: {
        type: 'string'
      },
      otp: {
        type: 'string'
      }
    },
    example: {
      token: '6e84446ad7f148238510229233dfe75e',
      cardNumber: '6330029166301033',
      otp: '9671'
    }
  },
  VoidtransactionRequest: {
    title: 'VoidtransactionRequest',
    required: ['transactionId', 'orderId'],
    type: 'object',
    properties: {
      transactionId: {
        type: 'string'
      },
      orderId: {
        type: 'string'
      }
    },
    example: {
      transactionId: '988889',
      orderId: '101109'
    }
  }
};
