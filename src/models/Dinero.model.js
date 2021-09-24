import { Schema, model } from 'mongoose';

const DineroSchema = new Schema({
    acumulado: {
        type: String,
        required: true
    }
});

export default model("Dinero", DineroSchema);