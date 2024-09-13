import express from "express";
import cors from "cors";
import mysql from 'mysql';

const PORT = 4041;
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students',
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Exit the process if database connection fails
    }
    console.log("Database connected.");
});

app.post('/addStudent', (req, res) => {
    const value = [
        req.body.name,
        req.body.section,
        req.body.email,
    ];

    const sql = "INSERT INTO studentInfo(`name`, `section`, `email`) VALUES(?)";
    
    db.query(sql, [value], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: 'Database error' });
        }
        return res.status(201).json({ message: 'Student created successfully', id: result.insertId });
    });
});



app.get('/studentInfo', (req, res) => {
    
    const sql = "SELECT * FROM studentInfo";

    db.query(sql, (err, result) => {
        if(err) {
            return res.json({Message: "Error in query"});
        }
        console.log(result);
        
        return res.json(result);

    })  
})


app.get('/studentInfo/:id', (req, res) => {
    
    const sql = "SELECT * FROM studentInfo WHERE id=?";

    const id = req.params.id;

    console.log(id);

    db.query(sql, [id], (err, result) => {
        if(err) {
            return res.json({Message: "Error in query"});
        }
        console.log(result);
        
        return res.json(result);

    })  
})


app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
