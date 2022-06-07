"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_1 = require("../controllers/location");
const router = (0, express_1.Router)();
router.get('/', location_1.getLocations);
router.get('/:id', location_1.getLocation);
router.post('/', location_1.createLocation);
exports.default = router;
//# sourceMappingURL=location.js.map