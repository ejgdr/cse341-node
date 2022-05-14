const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Contacts API',
    description: 'First project for CSE 341 - BYU Idaho',
  },
  host: 'cse341node-ejgdr.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ...: I USED MY index.js */

swaggerAutogen(outputFile, endpointsFiles, doc);