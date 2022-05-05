import express, { Application } from 'express';
import cors from 'cors';
import { userRoutes } from '../routes';
import { dbConnection } from '../database';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/usuarios'
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
        this.app.use( this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }
}

export default Server;