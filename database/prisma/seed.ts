import { PrismaClient } from '@prisma/client';
import { mockData } from './mockData.js';

const db = new PrismaClient();

const main = async () => {
  for (const deployment of mockData) {
    const { releaseId, frontendName, assets, createdAt, status } = deployment;

    await db.deployment.upsert({
      where: {
        releaseId_frontendName: {
          releaseId: releaseId,
          frontendName: frontendName,
        },
      },
      update: {},
      create: {
        assets,
        frontendName,
        status,
        releaseId,
        releaseDate: status === 'inactive' ? null : createdAt,
      },
    });
  }
};

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
