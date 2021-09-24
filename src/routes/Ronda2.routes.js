/import { Router } from 'express';
import * as SegundaRonda from '../controllers/Ronda2.controller';
const router = Router();

router.get('/', SegundaRonda.Preguntas);

router.post('/CrearPregunta', SegundaRonda.PreguntasRonda2);

router.post('/PrimeraRespuesta/:id', SegundaRonda.ResponderPregunta1);

router.post('/SegundaRespuesta/:id', SegundaRonda.ResponderPregunta2);

router.post('/TerceraRespuesta/:id', SegundaRonda.ResponderPregunta3);

router.post('/CuartaRespuesta/:id', SegundaRonda.ResponderPregunta4);

router.post('/QuintaRespuesta/:id', SegundaRonda.ResponderPregunta5);

export default router;