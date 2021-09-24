import { Schema, model } from 'mongoose';

const preguntaSchema = new Schema({
    pregunta: {
        type: String,
        required: true
    },
    respuesta1: {
        type: String,
        required: true
    },
    respuesta2: {
        type: String,
        required: true
    },
    respuesta3: {
        type: String,
        required: true
    },
    respuesta4: {
        type: String,
        required: true
    },
    categoria: {
        type: Number,
        required: true
    },
    premio: {
        type: Number,
        required: true
    },
});

export default model("Pregunta", preguntaSchema);