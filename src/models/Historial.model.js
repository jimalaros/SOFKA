import { Schema, model } from 'mongoose';

const HistorialSchema = new Schema({
    usuario: {
        type: String,
        required:true
    },
    telefono: {
        type: String,
        required:true
    },
    dinero: {
        type: String,
        required:true
    }
});

export default model('Historial', HistorialSchema);