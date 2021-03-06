"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        message: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    res.json({
        message: 'getUser'
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { body } = req;
    res.json({
        message: 'postUser',
        body
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: 'updateUser',
        id,
        body
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'updateUser',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map