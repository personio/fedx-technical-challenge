import { mockData } from '@frm/database/prisma/mockData.js';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { prismaMock } from '../../../testSetup/dbContext.js';
import { findAllReleases } from '../findAllReleases.js';

describe('findAllReleases', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get all releases', async () => {
    jest.spyOn(prismaMock.deployment, 'findMany').mockResolvedValue(mockData);

    await expect(findAllReleases()).resolves.toEqual(mockData);
  });
});
