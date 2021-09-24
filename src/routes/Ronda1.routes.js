import { Router } from 'express';
import * as PrimeraRonda from '../controllers/Ronda1.controller';
const router = Router();

router.get('/', PrimeraRonda.Preguntas);

router.post('/CrearPregunta', PrimeraRonda.PreguntasRonda1);

router.post('/PrimeraRespuesta/:id', PrimeraRonda.ResponderPregunta1);

router.post('/SegundaRespuesta/:id', PrimeraRonda.ResponderPregunta2);

router.post('/TercerRespuesta/:id', PrimeraRonda.ResponderPregunta3);

router.post('/CuartaRespuesta/:id', PrimeraRonda.ResponderPregunta4);

router.post('/QuintaRespuesta/:id', PrimeraRonda.ResponderPregunta5);

router.post('/AgregarDinero', PrimeraRonda.Premio);

export default router;