module.exports = {
  BusinessSignupRequest: {
    title: 'BusinessSignupRequest',
    required: [
      'name',
      'email',
      'phoneNumber',
      'userName',
      'password',
      'legalId',
      'civilId',
      'address',
      'business'
    ],
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
      },
      legalId: {
        type: 'string'
      },
      civilId: {
        type: 'string'
      },
      address: {
        $ref: '#/components/schemas/Address'
      },
      business: {
        $ref: '#/components/schemas/Business'
      }
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
  },
  Address: {
    title: 'Address',
    required: ['province', 'city', 'addressLine'],
    type: 'object',
    properties: {
      province: {
        type: 'string'
      },
      city: {
        type: 'string'
      },
      addressLine: {
        type: 'string'
      }
    },
    example: {
      province: 'test province',
      city: 'test city',
      addressLine: 'test addressLine'
    }
  },
  Business: {
    title: 'Business',
    required: [
      'name',
      'type',
      'accountNumber',
      'webSite',
      'mpgs',
      'locationNumber',
      'terminalId',
      'permissions'
    ],
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      accountNumber: {
        type: 'string'
      },
      webSite: {
        type: 'string'
      },
      mpgs: {
        $ref: '#/components/schemas/Mpgs'
      },
      locationNumber: {
        type: 'string'
      },
      terminalId: {
        type: 'string'
      },
      permissions: {
        $ref: '#/components/schemas/Permissions'
      }
    },
    example: {
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
  },
  Mpgs: {
    title: 'Mpgs',
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
      userName: 'merchant.ISCTEST001',
      password: '6d6fbe1d12ddaf707db27dc4e7047558'
    }
  },
  Permissions: {
    title: 'Permissions',
    required: [
      'cards',
      'currency',
      'QILimit',
      'MCLimit',
      'isVoidAllowed',
      'isRefoundAllowed',
      'isDispatchingAllowed'
    ],
    type: 'object',
    properties: {
      cards: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: ''
      },
      currency: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: ''
      },
      QILimit: {
        $ref: '#/components/schemas/QILimit'
      },
      MCLimit: {
        $ref: '#/components/schemas/MCLimit'
      },
      isVoidAllowed: {
        type: 'boolean'
      },
      isRefoundAllowed: {
        type: 'boolean'
      },
      isDispatchingAllowed: {
        type: 'boolean'
      }
    },
    example: {
      cards: ['QI_CARD', 'MASTER_CARD'],
      currency: ['IQD'],
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
  },
  QILimit: {
    title: 'QILimit',
    required: ['IQD'],
    type: 'object',
    properties: {
      IQD: {
        type: 'integer',
        format: 'int32'
      },
      USD: {
        type: 'integer',
        format: 'int32'
      }
    },
    example: {
      IQD: 11000,
      USD: 11000
    }
  },
  MCLimit: {
    title: 'MCLimit',
    required: ['IQD', 'USD'],
    type: 'object',
    properties: {
      IQD: {
        type: 'integer',
        format: 'int32'
      },
      USD: {
        type: 'integer',
        format: 'int32'
      }
    },
    example: {
      IQD: 11000,
      USD: 11000
    }
  },
  LoginRequest: {
    title: 'LoginRequest',
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
      userName: 'userName',
      password: '123ABCabc'
    }
  }
};
