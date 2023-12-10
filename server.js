const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const pool = mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'signup'
});

app.post('/login', (req, res) => {
 const { username, password } = req.body;
 const query = 'SELECT * FROM login WHERE username = ? AND password = ?';

 pool.query(query, [username, password], (error, results, fields) => {
    if (error) throw error;

    if (results.length > 0) {
      res.send('Login successful');
    } else {
      res.send('Invalid username or password');
    }
 });
});

app.listen(2000, () => {
 console.log('Server is running on port 2000');
});