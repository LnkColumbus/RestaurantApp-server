import express, { Application } from 'express';
import cors from 'cors';

import { dbConnection } from '../database';
import { locationRoutes, tableRoute, userRoutes } from '../routes';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        locations: '/api/locations',
        users: '/api/usuarios',
        tables: '/api/tables'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Conexión a la BD
        this.dbConnect();

        // Métodos iniciales
        this.middlewares();

        // Definición de las rutas
        this.routes();
    }

    async dbConnect() {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use( express.json() );

        // Public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use( this.apiPaths.locations, locationRoutes );
        this.app.use( this.apiPaths.users, userRoutes);
        this.app.use( this.apiPaths.tables, tableRoute );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }
}

export default Server;