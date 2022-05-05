import mongoose from 'mongoose';

export const dbConnection = async () => {
    const mongoConnection: string = process.env.MONGODB_CNN || 'mongodb://localhost:27017';
    try {
        await mongoose.connect(mongoConnection);
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar a la base de datos');
    }
}