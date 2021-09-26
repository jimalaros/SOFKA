import { Router } from 'express';
import * as Historial from '../controllers/Historial.controller';
const router = Router();

router.get('/', Historial.Historicos);

router.post('/CrearHistorial', Historial.CrearHistorial);

export default router;