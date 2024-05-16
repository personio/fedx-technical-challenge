import { Router } from 'express';
import { getAllReleases } from './handlers/getAllReleases.js';

export const v1 = Router();

v1.get('/releases', getAllReleases);
