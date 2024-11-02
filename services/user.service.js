// 1. Get all users
const { db } = require("../utils/db");

const getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// 2. Get a single user by ID
const getUserById = (req, res) => {
    const userId = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

// 3. Create a new user
const createUser = (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name, email });
    });
};


// 4. Update a user
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, userId], (err, result) => {
        if (err) throw err;
        res.json({ id: userId, name, email });
    });
};

// 5. Delete a user
const deleteUser =  (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User deleted successfully' });
    });
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}