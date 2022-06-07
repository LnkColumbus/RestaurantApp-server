import mongoose, { model, Model, Schema } from 'mongoose';

import { ILocation } from '../interfaces';

const locationSchema = new Schema({
    locationName: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
});

const Location: Model<ILocation> = mongoose.models.location || model('Location', locationSchema);
export default Location;