import mongoose, { Schema, model, Model } from 'mongoose';
import { IUser } from '../interfaces';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    state: { type: Boolean, required: true, default: false }
}, {
    timestamps: true // para habilitar los timestamps
});

// Aquí a nuestro modelo decimos que es de tipo Model de mongoose y que también extiende de
// nuestra interfaz de usuario y al momento de igualarlo le decimos que:
// Si ya existe un Modelo de User utilice ese y si no que cree uno nuevo en base al esquema
// Esto hace que cuando hagamos un cambio en el esquema tengamos que bajar y volver a subir el servidor
const User: Model<IUser> = mongoose.models.User || model('User', userSchema);
export default User; 

