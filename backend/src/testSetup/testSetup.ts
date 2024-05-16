import { jest } from '@jest/globals';
import { config } from 'dotenv';
import path from 'path';

jest.mock('../env');

config({
  path: path.join(process.cwd(), '.env.test'),
});
