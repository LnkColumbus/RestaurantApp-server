// La I al comienzo se le agrega por ser una interfaz, es un estandar hacerlo de esta manera
export interface IUser {
    _id: string;
    name: string;
    email: string;
    state: boolean;
}