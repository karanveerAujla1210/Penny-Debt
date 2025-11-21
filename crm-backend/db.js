const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aujla@1422',  // your MySQL password
  database: 'loan_crm'     // database you already created
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to MySQL database ✅');
});

module.exports = db;
