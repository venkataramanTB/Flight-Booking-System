const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;
require('dotenv').config();
app.use(cors());
app.use(express.json());

// Configure PostgreSQL connection
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD.toString(),
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

app.get('/bookings', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM FlightBookings');
        const results = { 'results': (result) ? result.rows : null};
        res.send(results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.get("/flights", async (req, res) => {
    try {
        const allFlights = await pool.query("SELECT * FROM flights");
        res.json(allFlights.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});