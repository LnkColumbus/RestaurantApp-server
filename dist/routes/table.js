"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const table_1 = require("../controllers/table");
const router = (0, express_1.Router)();
router.get('/', table_1.getTables);
router.get('/:id', table_1.getTable);
router.post('/', table_1.createTable);
exports.default = router;
//# sourceMappingURL=table.js.map