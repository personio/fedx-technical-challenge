import type { Deployment } from '@prisma/client';
import type { RequestHandler } from 'express';
import { findAllReleases } from '../queries/findAllReleases.js';

export const getAllReleases: RequestHandler<
  null,
  {
    data: Pick<
      Deployment,
      | 'frontendName'
      | 'releaseId'
      | 'releaseDate'
      | 'status'
      | 'createdAt'
      | 'assets'
    >[];
  }
> = async (_req, res, next) => {
  try {
    const data = await findAllReleases();

    res.json({ data });
  } catch (error) {
    next(error);
  }
};
