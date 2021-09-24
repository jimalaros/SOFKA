/import { Router } from 'express';
import * as QuintaRonda from '../controllers/Ronda2.controller';
const router = Router();

router.get('/', QuintaRonda.Preguntas);

router.post('/CrearPregunta', QuintaRonda.PreguntasRonda2);

router.post('/PrimeraRespuesta/:id', QuintaRonda.ResponderPregunta1);

router.post('/SegundaRespuesta/:id', QuintaRonda.ResponderPregunta2);

router.post('/TercerRespuesta/:id', QuintaRonda.ResponderPregunta3);

router.post('/CuartaRespuesta/:id', QuintaRonda.ResponderPregunta4);

router.post('/QuintaRespuesta/:id', QuintaRonda.ResponderPregunta5);

export default router;