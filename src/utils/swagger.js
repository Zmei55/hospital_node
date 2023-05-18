const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

/**
 * @swagger
 * components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - logName
 *          - password
 *          - station
 *          - token
 *        properties:
 *          _id:
 *            type: string
 *            description: The auto-generated id of the user
 *          name:
 *            type: string
 *            description: The user name
 *          logName:
 *            type: string
 *            description: The login name
 *          password:
 *            type: string
 *            description: The password for authorization
 *          station:
 *            type: string
 *            description: The station where the user works
 *          token:
 *            type: string
 *            description: The token for authorization
 *        example:
 *          _id: lksdmcldkc02934
 *          name: Marta Weber
 *          logName: asd
 *          password: asd123
 *          station: neurologisch
 *          token: lakdjf0923rjl.pdkjflaksjdflkDJVKDFALKDalsdjkf.asdjfakdjfadikfjadlskf
 */

/**
 * @swagger
 * /
 *  get:
 *    summary: Returns the list of all the patients
 *    responses:
 *      200:
 *        description: The list of the patients
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

const options = {
  explorer: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hospital REST API',
      version: '1.0.0',
      description: 'Node Express REST API',
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: 'http://localhost: 3001',
      },
    ],
  },
  // apis: ['./src/routes/api/*.js', './src/models/*.js'],
  apis: ['./src/routes/api/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);

// const swaggerDocs = (app, port) => {
//   // Swagger page
//   app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//   // Docs in JSON format
//   app.get('docs.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
//   });
// };

// module.exports = swaggerDocs;
module.exports = {
  swaggerUI,
  swaggerSpec,
};
