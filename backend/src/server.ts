import Express from 'express';
import { v1 } from './v1/router.js';
import { getReadiness } from './v1/handlers/healthCheck.js';

export const server = Express();

server.use('/v1', v1);
server.get('/readiness', getReadiness);
