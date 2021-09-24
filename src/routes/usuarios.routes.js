import { Router } from 'express';
import * as Usuarios from '../controllers/usuarios.controller';
import { Verificar } from '../middlewares/token.middleware';

const router = Router();

router.get('/', Verificar, Usuarios.Usuarios);

router.post('/nuevos', Usuarios.CrearUsuario);

router.post('/Login', Usuarios.InicioSesion);

export default router;