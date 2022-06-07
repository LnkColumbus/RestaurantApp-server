import { Request, Response } from 'express'
import { ITable } from '../interfaces';

import { Table } from '../models';

type DataResponse =
| { message: string }
| ITable[]
| ITable

export const getTables = async( req: Request, res: Response ) => {
    try {
        const tables = await Table.find().lean();

        if( !tables ) {
            return res.status(400).json({
                message: 'No tables founded'
            });
        }

        res.status(200).json(tables);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, please contact with the admin'})
    }
}

export const getTable = async( req: Request, res: Response ) => {
    const { id } = req.query;

    try {
        const table = await Table.findById(id).lean();

        if( !table ) {
            return res.status(400).json({
                message: 'No table founded'
            });
        }

        res.status(200).json(table);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, please contact with the admin'})
    }
}

export const createTable = async( req: Request, res: Response ) => {

    const { location = '', tableNumber = 0, tableCapacity = 0 } = req.body;

    const newTable = new Table({
        location,
        tableNumber,
        tableCapacity
    });

    try {
        await newTable.save({ validateBeforeSave: true });

        res.status(201).json(newTable);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, please contact with the admin'})
    }
}