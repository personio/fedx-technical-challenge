import { prisma } from '../../db.js';

export const checkHealth = () => prisma.$queryRaw`SELECT 1;`;
