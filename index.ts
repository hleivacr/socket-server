import Server from './classes/server'
import { SERVER_PORT } from './globals/enviroments';
import router from './routes/router';
import cors from 'cors';

import bodyParser from 'body-parser';

const server = new Server();
//body parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors({origin: true, credentials: true}))

//rutas de servicio
server.app.use('/', router)

server.start( () => {
console.log (`Servidor Corriendo en el puerto ${SERVER_PORT}`)
}); 