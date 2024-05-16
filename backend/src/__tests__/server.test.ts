import { describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';
import { prismaMock } from '../testSetup/dbContext.js';

describe('server', () => {
  describe('/', () => {
    it('should return db health', async () => {
      await jest.isolateModulesAsync(async () => {
        jest.spyOn(prismaMock, '$queryRaw').mockResolvedValue(2);
        const { server } = await import('../server.js');
        const response = await request(server).get('/readiness');
        expect(response.statusCode).toEqual(200);
      });
    });

    it('should handle bad db health', async () => {
      await jest.isolateModulesAsync(async () => {
        (console.error as jest.Mock).mockImplementationOnce(() => {
          /* */
        });
        jest
          .spyOn(prismaMock, '$queryRaw')
          .mockRejectedValue(new Error('error'));
        const { server } = await import('../server.js');
        const response = await request(server).get('/readiness');
        expect(response.statusCode).toEqual(500);
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenNthCalledWith(
          1,
          'Unable to connect to database.'
        );
      });
    });

    it('should return app health', async () => {
      await jest.isolateModulesAsync(async () => {
        const { server } = await import('../server.js');
        const response = await request(server).get('/liveness');
        expect(response.statusCode).toEqual(200);
      });
    });
  });
  describe('v1', () => {
    describe('/releases', () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      it('should retrieve all releases', async () => {});

      it('should respond with error when operation fails', async () => {
        await jest.isolateModulesAsync(async () => {
          jest
            .spyOn(prismaMock.deployment, 'findMany')
            .mockImplementation(() => {
              throw new Error('Mock Error');
            });

          const { server } = await import('../server.js');

          const response = await request(server).get('/v1/releases');

          expect(response.status).toEqual(500);
        });
      });
    });
  });
});
