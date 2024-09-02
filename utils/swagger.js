import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GymScript REST API',
      version: '1.0.0',
      description: 'Docs for GymScript REST API',
      contact: {
        name: 'Franco Sanchez',
        email: 'francosanchez@gmail.com',
        url: 'https://github.com/fraancosan',
      },
    },
    servers: [
      {
        url: 'http://localhost:' + process.env.PORT || 3000,
        description: 'Development server',
      },
    ],
  },
  apis: ['../routes/*.js'],
  externalDocs: {
    description: 'Find out more about GymScript',
    url: 'https://github.com/fraancosan/gymScriptBE',
  },
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
