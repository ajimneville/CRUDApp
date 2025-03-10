import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "client_db"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post('/users', (req, res) => {
    const sql = "INSERT INTO users (`username`, `content`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.content
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    }
)
})

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE users SET `username`=? `content`=? WHERE id=?";
    const id = req.params.id;
    db.query(sql, [req.body.username, req.body.content], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.join(ressult);
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.join(result);
    })
})

app.listen(3000, () => {
    console.log("listening...")
})