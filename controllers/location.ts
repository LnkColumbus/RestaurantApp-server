import { Request, Response } from 'express';
import { ILocation } from '../interfaces';

import { Location } from '../models';

type DataResponse =
| { message: string }
| ILocation[]
| ILocation

export const getLocations = async( req: Request, res: Response<DataResponse> ) => {
    try {
        const locations = await Location.find().lean();

        if (!locations) {
            return res.status(400).json({
                message: 'No locations founded'
            })
        }

        return res.status(200).json(locations);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong, please contact with the admin'
        });
    }
}

export const getLocation = async( req: Request, res: Response<DataResponse> ) => {

    const { id } = req.query;

    try {
        const location = await Location.findById(id).lean();

        if (!location) {
            return res.status(400).json({
                message: 'No location founded'
            })
        }

        return res.status(200).json(location);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong, please contact with the admin'
        });
    }
}

export const createLocation = async( req: Request, res: Response<DataResponse> ) => {

    const { locationName = '', phone = 0, city = '', state = '' } = req.body;

    const newLocation = new Location({
        locationName,
        phone,
        city,
        state
    });

    try {

        await newLocation.save({ validateBeforeSave: true });
        return res.status(201).json(newLocation);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong, please contact with the admin'
        });
    }
}