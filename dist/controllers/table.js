"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = exports.getTable = exports.getTables = void 0;
const models_1 = require("../models");
const getTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tables = yield models_1.Table.find().lean();
        if (!tables) {
            return res.status(400).json({
                message: 'No tables founded'
            });
        }
        res.status(200).json(tables);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, please contact with the admin' });
    }
});
exports.getTables = getTables;
const getTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const table = yield models_1.Table.findById(id).lean();
        if (!table) {
            return res.status(400).json({
                message: 'No table founded'
            });
        }
        res.status(200).json(table);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, please contact with the admin' });
    }
});
exports.getTable = getTable;
const createTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location = '', tableNumber = 0, tableCapacity = 0 } = req.body;
    const newTable = new models_1.Table({
        location,
        tableNumber,
        tableCapacity
    });
    try {
        yield newTable.save({ validateBeforeSave: true });
        res.status(201).json(newTable);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, please contact with the admin' });
    }
});
exports.createTable = createTable;
//# sourceMappingURL=table.js.map