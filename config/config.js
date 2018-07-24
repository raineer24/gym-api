require('dotenv').config();

module.exports = {
    env: {
        port: process.env.PORT || '6001'
    },
    db: {
        hostname: process.env.RDS_HOSTNAME,
        port: process.env.RDS_PORT,
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        name: process.env.RDS_DB_NAME,
    },
    swaggerFile: 'api/swagger/swagger.yaml',
};
