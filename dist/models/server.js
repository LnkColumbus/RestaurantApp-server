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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("../database");
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.apiPaths = {
            locations: '/api/locations',
            users: '/api/usuarios',
            tables: '/api/tables'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Conexión a la BD
        this.dbConnect();
        // Métodos iniciales
        this.middlewares();
        // Definición de las rutas
        this.routes();
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, database_1.dbConnection)();
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Public
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.locations, routes_1.locationRoutes);
        this.app.use(this.apiPaths.users, routes_1.userRoutes);
        this.app.use(this.apiPaths.tables, routes_1.tableRoute);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map