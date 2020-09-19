module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'QI Payment Gateway',
    description: 'QI Payment Gateway backend APIs documentation for developers',
    termsOfService: 'https://qi.iq/english/services',
    contact: {
      name: 'QI Gateway API Support',
      url: 'https://qi.iq/english/contact-us',
      email: 'qicard@qicard.net'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://qi.iq/english/about-us'
    },
    version: '1.0'
  },
  servers: [
    {
      url: '{protocol}://localhost:3000/api/v0',
      description: 'Local Server',
      variables: {
        protocol: {
          enum: ['http'],
          default: 'http'
        }
      }
    },
    {
      url: '{protocol}://pay-uat.qi.iq:5050/api/v0',
      description: 'Staging Server',
      variables: {
        protocol: {
          enum: ['https'],
          default: 'https'
        }
      }
    }
  ],
  tags: [
    {
      name: 'Auth'
    },
    {
      name: 'Transaction'
    }
  ]
};
