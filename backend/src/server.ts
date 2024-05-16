import Express from 'express';
import { v1 } from './v1/router.js';

export const server = Express();

server.use('/v1', v1);
