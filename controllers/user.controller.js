import UserService from '../services/user.service.js';

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body);

            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async get(req, res) {
        try {
            const users = await UserService.get(req.body);

            res.json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const user = await UserService.getById(id);

            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async put(req, res) {
        try {
            const user = await UserService.put(req.body);

            res.json(user);
        } catch (error) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const user = await UserService.delete(id);

            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new UserController();
