const { createUser, createUserBody} = require("./user")
const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'Ryde Assessment Documentation',
    },
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Local Server',
      }
    ],
    tags: [
      {
        name: 'user',
      }
    ],
    paths: {
        users: {
          post: createUser,
        },
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
        schemas: {
          createUserBody,
        },
      },
  };
  
module.exports.apiDocumentation = apiDocumentation