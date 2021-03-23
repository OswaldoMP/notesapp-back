require('./settings/config');
const express = require('express');
const cors = require('cors');
const db = require('./settings/db');

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routers/index'));

db.conectMongo();
app.listen(PORT, () => {
    console.log(`run server in port: ${PORT}`);
});