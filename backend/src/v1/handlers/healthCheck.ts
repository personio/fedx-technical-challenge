import type { RequestHandler } from 'express';
import { checkHealth } from '../queries/checkHealth.js';

export const getReadiness: RequestHandler = async (_req, res, next) => {
  try {
    await checkHealth();
    return res.sendStatus(200);
  } catch (error) {
    console.error('Unable to connect to database.');
    return next(error);
  }
};
