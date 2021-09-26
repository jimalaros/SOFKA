import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import './basededatos';
import usuariosRoutes from './routes/usuarios.routes';
import Ronda1 from './routes/Ronda1.routes';
import Ronda2 from './routes/Ronda2.routes';
import Ronda3 from './routes/Ronda3.routes';
import Ronda4 from './routes/Ronda4.routes';
import Ronda5 from './routes/Ronda5.routes';
import Historial from './routes/Historial.routes';
import * as options from './utils/swagger';

const swaggerSpecs = swaggerJSDoc(options.swaggerOptions);
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.set('puerto', process.env.PORT || 5000);

app.use('/usuarios', usuariosRoutes);
app.use('/primeraronda', Ronda1);
app.use('/segundaronda', Ronda2);
app.use('/tercerronda', Ronda3);
app.use('/cuartaronda', Ronda4);
app.use('/quintaronda', Ronda5);
app.use('/historial', Historial);

app.listen(app.get('puerto'), () => {
    console.log('Escuchando en el puerto ', app.get('puerto'));
});

export default app;