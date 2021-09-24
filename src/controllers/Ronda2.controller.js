import Pregunta from '../models/preguntas';

/**export const PreguntasRonda2 = async (req, res) => {
    try {
        const PreguntasRonda2 = await Promise.all([
            new Pregunta({ pregunta: 'En los hoteles elegantes, ¿Qué snack suele dejarse sobre las almohadas?', categoria: 2 }).save(),
            new Pregunta({ pregunta: '¿Qué planta es el símbolo nacional de Irlanda?', categoria: 2 }).save(),
            new Pregunta({ pregunta: '¿Qué significa la abreviación en inglés "BFF"?', categoria: 2 }).save(),
            new Pregunta({ pregunta: '¿De qué país son nativos los canguros?', categoria: 2 }).save(),
            new Pregunta({ pregunta: '¿Qué parte importante de la topografía de Estados Unidos comprende aproximadamente un 20% del agua dulce de la Tierra?', categoria: 2 }).save(),
        ]);
        res.json(PreguntasRonda2);
    } catch (error) { res.status(404).json(error); }
};**/

let primerpremio=0;
let segundopremio=0;
let tercerpremio=0;
let cuartopremio=0;
let quintopremio=0;
let premiototal=[];

export const Preguntas = async (req, res) => {
    try {
        const preguntas = await Pregunta.find();
        if(preguntas) { res.json(preguntas) }
        else {res.status(400).json({msg: 'Faltan Datos'})}
    } catch (error) { res.status(404).json(error); }
};

export const PreguntasRonda2 = async (req, res) => {
    const { pregunta, respuesta2, respuesta2, respuesta3, respuesta4, categoria, premio } = req.body;
    try {
        if (pregunta && respuesta2 && respuesta2 && respuesta3 && respuesta4 && categoria && premio) {
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
        premiototal.push(primerpremio);
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${primerpremio}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: 0`}); }
};

export const ResponderPregunta2 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta2) {
        let segundopremio = Preguntas.premio;
        premiototal.push(segundopremio);
        let premio = premiototal[0] + segundopremio;
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premio}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[0]}`}); }
};

export const ResponderPregunta3 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta3) {
        let tercerpremio = Preguntas.premio;
        premiototal.push(tercerpremio);
        let premio = premiototal[0] + premiototal[1] + tercerpremio;
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premio}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[1]}`}); }
};

export const ResponderPregunta4 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta4) {
        let cuartopremio = Preguntas.premio;
        premiototal.push(cuartopremio);
        let premio = premiototal[0] + premiototal[1] + premiototal[2] + cuartopremio;
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premio}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[2]}`}); }
};

export const ResponderPregunta5 = async (req, res) => {
    const Preguntas = await Pregunta.findById(req.params.id);
    const opción = req.body.respuesta;
    if (opción === Preguntas.respuesta1) {
        let quintopremio = Preguntas.premio;
        let premio = premiototal[0] + premiototal[1] + premiototal[2] + premiototal[3] + quintopremio;
        res.status(200).json({msg: `Su respuesta es correcta, puede continuar, dinero acumulado: ${premio}`});
    }
    else {res.status(400).json({msg: `Su respuesta es incorrecta, su dinero acumulado es: ${premiototal[3]}`}); }
};