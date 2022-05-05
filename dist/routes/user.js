"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/', controllers_1.getUsers);
router.get('/:id', controllers_1.getUser);
router.post('/', controllers_1.createUser);
router.put('/:', controllers_1.updateUser);
router.delete('/:id', controllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map