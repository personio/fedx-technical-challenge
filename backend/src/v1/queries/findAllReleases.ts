import { prisma } from '../../db.js';

export const findAllReleases = async () => {
  return prisma.deployment.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      frontendName: true,
      releaseId: true,
      releaseDate: true,
      status: true,
      createdAt: true,
      assets: true,
    },
  });
};
