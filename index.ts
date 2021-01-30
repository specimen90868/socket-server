import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';

const server = Server.instance;

// Body Parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Rutas de Servicios
server.app.use('/', router);

server.start(() => {
  console.log(`Servidor en puerto ${server.port}`);
});