import mongoose, { Model, model, Schema } from 'mongoose';

import { ITable } from '../interfaces';

const tableSchema = new Schema({
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
    tableNumber: { type: Number, required: true },
    tableCapacity: { type: Number, required: true }
});

const Table: Model<ITable> = mongoose.models.Table || model('Table', tableSchema);
export default Table;