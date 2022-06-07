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
exports.createLocation = exports.getLocation = exports.getLocations = void 0;
const models_1 = require("../models");
const getLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield models_1.Location.find().lean();
        if (!locations) {
            return res.status(400).json({
                message: 'No locations founded'
            });
        }
        return res.status(200).json(locations);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong, please contact with the admin'
        });
    }
});
exports.getLocations = getLocations;
const getLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const location = yield models_1.Location.findById(id).lean();
        if (!location) {
            return res.status(400).json({
                message: 'No location founded'
            });
        }
        return res.status(200).json(location);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong, please contact with the admin'
        });
    }
});
exports.getLocation = getLocation;
const createLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { locationName = '', phone = 0, city = '', state = '' } = req.body;
    const newLocation = new models_1.Location({
        locationName,
        phone,
        city,
        state
    });
    try {
        yield newLocation.save({ validateBeforeSave: true });
        return res.status(201).json(newLocation);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong, please contact with the admin'
        });
    }
});
exports.createLocation = createLocation;
//# sourceMappingURL=location.js.map