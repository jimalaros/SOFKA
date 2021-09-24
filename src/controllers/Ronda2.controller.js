import Pregunta from '../models/preguntas';
import Dinero from '../models/Dinero.model';

let acumulado = 0;
let premio=0;
let premiototal=[];

export const DineroRonda1 = async (req, res) => {
    try {
        const dinero = await Dinero.find();
        const dineroRonda1 = dinero[0].acumulado;
        res.json({msg: `Dinero De la Ronda 1: ${dineroRonda1}`});
    } catch (error) { res.status(404).json(error); }
};

export const Preguntas = async (req, res) => {
    try {
        let questions = [];
        const preguntas = await Pregunta.find();
        for (let index = 0; index < preguntas.length; index++) {
            const elementos = preguntas[index].categoria;
            if (elementos === 2) { 
                questions.push(preguntas[index]);
            } 
        } res.json(questions);
    } catch (error) { res.status(404).json(error); }
};

export const PreguntasRonda2 = async (req, res) => {
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
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta1) {
        let primerpremio = Preguntas.premio;
        const dinero = await Dinero.find();
        premio = Number(dinero[0].acumulado);
        let premio1 = premio + primerpremio;
        premiototal.push(premio1);
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premio1}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premio}`}); }
};

export const ResponderPregunta2 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta2) {
        let segundopremio = Preguntas.premio;
        let premio2 = premiototal[0] + segundopremio;
        premiototal.push(premio2)
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premiototal[1]}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[0]}`}); }
};

export const ResponderPregunta3 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta3) {
        let tercerpremio = Preguntas.premio;
        let premio3 = premiototal[1] + tercerpremio;
        premiototal.push(premio3);
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premiototal[2]}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[1]}`}); }
};

export const ResponderPregunta4 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta4) {
        let cuartopremio = Preguntas.premio;
        let premio4 = premiototal[2] + cuartopremio;
        premiototal.push(premio4);
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premiototal[3]}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[2]}`}); }
};

export const ResponderPregunta5 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta4) {
        let quintopremio = Preguntas.premio;
        let premio5 = premiototal[3] + quintopremio;
        premiototal.push(premio5);
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premiototal[4]}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[3]}`}); }
};

export const Premio = async (req, res) => {
    try {
        acumulado = premiototal[0] + premiototal[1] + premiototal[2] + premiototal[3] + premiototal[4];;
        console.log(acumulado);
        const DineroAcumulado = new Dinero({ acumulado });
        await DineroAcumulado.save();
        res.status(201).json({msg: 'Dinero Guardado con Exito'});
    } catch (error) { res.status(404).json(error); }
};