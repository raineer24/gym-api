const express = require('express')
const app = express()

const log = require('color-logs')(true, true, __filename);

const config = require('./config/config');

const SwaggerParser = require('swagger-parser');
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-tools/middleware/swagger-ui');

// Validate swagger definition
SwaggerParser.validate(config.swaggerFile)
    .then((result) => {
        log.info('Validation OK', result.info);
    })
    .catch((err) => {
        log.info('Swagger Error:', err);
    });



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))