import { Router } from 'express';
import * as CuartaRonda from '../controllers/Ronda4.controller';
const router = Router();

router.get('/', CuartaRonda.Preguntas);

router.get('/DineroRonda3', CuartaRonda.DineroRonda3);

router.post('/CrearPregunta', CuartaRonda.PreguntasRonda4);

router.post('/PrimeraRespuesta/:id', CuartaRonda.ResponderPregunta1);

router.post('/SegundaRespuesta/:id', CuartaRonda.ResponderPregunta2);

router.post('/TercerRespuesta/:id', CuartaRonda.ResponderPregunta3);

router.post('/CuartaRespuesta/:id', CuartaRonda.ResponderPregunta4);

router.post('/QuintaRespuesta/:id', CuartaRonda.ResponderPregunta5);

router.post('/AgregarDinero', CuartaRonda.Premio);

export default router;