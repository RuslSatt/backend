import { pool } from '../db.js';

class UserService {
    async create(user) {
        const { name, surname } = user;

        const createdUser = await pool.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [
            name,
            surname,
        ]);

        return createdUser.rows[0];
    }

    async get() {
        const users = await pool.query('SELECT * FROM person');
        return users.rows;
    }

    async getById(id) {
        const user = await pool.query('SELECT * FROM person where id = $1', [id]);
        return user.rows[0];
    }

    async put(user) {
        const { id, name, surname } = user;
        const putUser = await pool.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [
            name,
            surname,
            id,
        ]);
        return putUser.rows[0];
    }

    async delete(id) {
        const user = await pool.query('DELETE FROM person where id = $1', [id]);
        return user;
    }
}

export default new UserService();
