import { pool } from '../db.js';

class UserController {
    async create(req, res) {
        try {
            const { name, surname } = req.body;

            const user = await pool.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [
                name,
                surname,
            ]);

            res.json(user.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async get(req, res) {
        try {
            const users = await pool.query('SELECT * FROM person');
            res.json(users.rows);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const user = await pool.query('SELECT * FROM person where id = $1', [id]);
            res.json(user.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async put(req, res) {
        try {
            const { id, name, surname } = req.body;
            const user = await pool.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [
                name,
                surname,
                id,
            ]);
            res.json(user.rows[0]);
        } catch (error) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const user = await pool.query('DELETE FROM person where id = $1', [id]);
            res.json(user.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();
