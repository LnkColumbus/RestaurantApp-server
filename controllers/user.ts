import { Request, Response } from 'express';

export const getUsers = ( req: Request, res: Response ) => {
    res.json({
        message: 'getUsers'
    });
}

export const getUser = ( req: Request, res: Response ) => {
    res.json({
        message: 'getUser'
    });
}

export const createUser = ( req: Request, res: Response ) => {
    const { body } = req;

    res.json({
        message: 'postUser',
        body
    });
}

export const updateUser = ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        message: 'updateUser',
        id,
        body
    });
}

export const deleteUser = ( req: Request, res: Response ) => {
    const { id } = req.params;

    res.json({
        message: 'updateUser',
        id
    });
}