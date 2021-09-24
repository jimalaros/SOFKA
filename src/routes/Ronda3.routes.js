import { Router } from 'express';
import * as TercerRonda from '../controllers/Ronda3.controller';
const router = Router();

router.get('/', TercerRonda.Preguntas);

router.get('/DineroRonda2', TercerRonda.DineroRonda2);

router.post('/CrearPregunta', TercerRonda.PreguntasRonda3);

router.post('/PrimeraRespuesta/:id', TercerRonda.ResponderPregunta1);

router.post('/SegundaRespuesta/:id', TercerRonda.ResponderPregunta2);

router.post('/TercerRespuesta/:id', TercerRonda.ResponderPregunta3);

router.post('/CuartaRespuesta/:id', TercerRonda.ResponderPregunta4);

router.post('/QuintaRespuesta/:id', TercerRonda.ResponderPregunta5);

router.post('/AgregarDinero', TercerRonda.Premio);

export default router;