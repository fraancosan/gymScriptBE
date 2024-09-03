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
    externalDocs: {
      description: 'API Github Repo',
      url: 'https://github.com/fraancosan/gymScriptBE',
    },
  },
  apis: ['./docs/swagger/routes/*.yaml', './docs/swagger/schemas/*.yaml'],
};

const noHeader = {
  customCss: '.swagger-ui .topbar { display: none }',
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, noHeader));
}
