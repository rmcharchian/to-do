var pg = require('pg');

var config = {
    database: 'tasks',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMills: 3000
};

module.exports = pg.Pool(config);