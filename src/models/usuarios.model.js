import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

export default model('Usuario', usuarioSchema);