import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio Management API",
      version: "1.0.0",
      description: "Backend API Documentation",
    },

    servers: [
      {
        url: "http://localhost:2000",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./Routes/*.js"],
};
const swaggerSpec = swaggerJsDoc(options);


export default swaggerSpec;
