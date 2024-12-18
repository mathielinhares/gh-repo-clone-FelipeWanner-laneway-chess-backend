const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'databasechess.c38qkeam6cgq.ap-southeast-2.rds.amazonaws.com',
  user: 'admin',     
  password: 'eKp8WdTK8z6EALV',    
  database: 'databasechess', 
  connectTimeout: 20000
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API endpoint
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
});

// Start the server
const PORT = 4505;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
