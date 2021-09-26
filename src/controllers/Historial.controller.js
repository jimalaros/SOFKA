import Historial from '../models/Historial.model';
import Usuario from '../models/usuarios.model';
import Dinero from '../models/Dinero.model';
import jwt from "jsonwebtoken";
import config from "../config"; 

export const Historicos = async (req, res) => {
    try {
        const historial = await Historial.find();
        if(historial) { res.json(historial) }
        else {res.status(400).json({msg: 'Faltan Datos'})}
    } catch (error) { res.status(404).json(error); }
};

export const CrearHistorial = async (req, res) =>
{
    try {

        const bearerHeader = req.headers['authorization'];
        if(bearerHeader)
        {
            const bearer = bearerHeader.split(" ");
            const token = bearer[1];
    
            //Decodificar el token
            const decoded = jwt.verify(token, config.secret);
            const id = decoded.id;
            const user = await Usuario.findById(id);

            const usuario = user.nombre;
            const telefono = user.telefono;

            const money = await Dinero.find();
            for (let index = 0; index < money.length; index++) {
                let dinero = money[index];   
            }

            const InicioHistorial = new Historial({ usuario, telefono, dinero });
            await InicioHistorial.save();
            res.status(201).json({msg: 'Datos guardados con exito'});
        }
        else { res.status(401).send({ auth: false, msg: "Ha olvidado el token" }); }
    } catch (error) { res.status(404).json(error); }
};