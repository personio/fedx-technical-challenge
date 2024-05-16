import { config } from "dotenv";
import path from "path";

const { NODE_ENV } = process.env;

config({
  path: path.join(process.cwd(), `.env.${NODE_ENV}`),
});

export const { DATABASE_URL, PORT } = process.env;
