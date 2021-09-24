/import { Router } from 'express';
import * as CuartaRonda from '../controllers/Ronda2.controller';
const router = Router();

router.get('/', CuartaRonda.Preguntas);

router.post('/CrearPregunta', CuartaRonda.PreguntasRonda4);

router.post('/PrimeraRespuesta/:id', CuartaRonda.ResponderPregunta1);

router.post('/SegundaRespuesta/:id', CuartaRonda.ResponderPregunta2);

router.post('/TercerRespuesta/:id', CuartaRonda.ResponderPregunta3);

router.post('/CuartaRespuesta/:id', CuartaRonda.ResponderPregunta4);

router.post('/QuintaRespuesta/:id', CuartaRonda.ResponderPregunta5);

export default router;