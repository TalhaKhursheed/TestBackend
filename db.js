const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "company",
    password: "4X4mileycyrus",
    port: 5433,
});

module.exports = pool;
