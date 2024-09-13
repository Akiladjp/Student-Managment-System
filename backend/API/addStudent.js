import express from 'express';
import db from '../config/database.js';

const addStudent = express.Router();

addStudent.post('/add-student', (req, res) => {
  const { name, age } = req.body;
  const sql = `INSERT INTO students (name, age) VALUES (?, ?)`;
  db.query(sql, [name, age], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Student added successfully!' });
  });
});

export default addStudent;
