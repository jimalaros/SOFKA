import Pregunta from '../models/preguntas';
import Dinero from '../models/Dinero.model';

let acumulado = 0;
let premiototal=[];

export const Preguntas = async (req, res) => {
    try {
        let questions = [];
        const preguntas = await Pregunta.find();
        for (let index = 0; index < preguntas.length; index++) {
            const elementos = preguntas[index].categoria;
            if (elementos === 1) { 
                questions.push(preguntas[index]);
            } 
        } res.json(questions);
    } catch (error) { res.status(404).json(error); }
};

export const PreguntasRonda1 = async (req, res) => {
    const { pregunta, respuesta1, respuesta2, respuesta3, respuesta4, categoria, premio } = req.body;
    try {
        if (pregunta && respuesta1 && respuesta2 && respuesta3 && respuesta4 && categoria && premio) {
            const PreguntaRepetida = await Pregunta.findOne({ pregunta });
            if (PreguntaRepetida) {
                res.status(400).json('La pregunta ya existe');
            } else {
                new Pregunta({...req.body}).save();
                res.status(201).json({ msg: 'La pregunta fue creada con exito' });
            }
        } else { res.status(400).json({ msg: 'Faltan datos' }); }
    } catch (error) { res.status(404).json(error); }
};

export const ResponderPregunta1 = async (req, res) => {
    try {
        const Preguntas = await Pregunta.findById(req.params.id);
        const opción = req.body.respuesta;
        if (opción === Preguntas.respuesta1) {
            let primerpremio = Preguntas.premio;
            premiototal.push(primerpremio);
            res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${primerpremio}`});
        } else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: 0`}); }
    } catch (error) { res.status(404).json(error); }
};

export const ResponderPregunta2 = async (req, res) => {
    try {
        const Preguntas = await Pregunta.findById(req.params.id);
        const opción = req.body.respuesta;
        if (opción === Preguntas.respuesta2) {
            let segundopremio = Preguntas.premio;
            premiototal.push(segundopremio);
            acumulado = premiototal[0] + segundopremio;
            res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${acumulado}`});
        } else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[0]}`}); }    
    } catch (error) { res.status(404).json(error); }
};

export const ResponderPregunta3 = async (req, res) => {
    try {
        const Preguntas = await Pregunta.findById(req.params.id);
        const opción = req.body.respuesta;
        if (opción === Preguntas.respuesta3) {
            let tercerpremio = Preguntas.premio;
            premiototal.push(tercerpremio);
            acumulado = premiototal[0] + premiototal[1] + tercerpremio;
            res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${acumulado}`});
        } else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[1]}`}); }   
    } catch (error) { res.status(404).json(error); }
};

export const ResponderPregunta4 = async (req, res) => {
    try {
        const Preguntas = await Pregunta.findById(req.params.id);
        const opción = req.body.respuesta;
        if (opción === Preguntas.respuesta4) {
            let cuartopremio = Preguntas.premio;
            premiototal.push(cuartopremio);
            acumulado = premiototal[0] + premiototal[1] + premiototal[2] + cuartopremio;
            res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${acumulado}`});
        } else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[2]}`}); }   
    } catch (error) { res.status(404).json(error); }
};

export const ResponderPregunta5 = async (req, res) => {
    try {
        const Preguntas = await Pregunta.findById(req.params.id);
        const opción = req.body.respuesta;
        if (opción === Preguntas.respuesta1) {
            let quintopremio = Preguntas.premio;
            premiototal.push(quintopremio);
            acumulado = premiototal[0] + premiototal[1] + premiototal[2] + premiototal[3] + quintopremio;
            res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${acumulado}`});
        } else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[3]}`}); }
    } catch (error) { res.status(404).json(error); }
};

export const PremioRonda1 = async (req, res) => {
    try {
        acumulado = premiototal[0] + premiototal[1] + premiototal[2] + premiototal[3] + premiototal[4];
        const DineroAcumulado = new Dinero({ acumulado });
        await DineroAcumulado.save();
        res.status(201).json({msg: 'Dinero Guardado con Exito'});
    } catch (error) { res.status(404).json(error); }
};