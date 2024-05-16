import { PORT as envPort } from './env.js';
import { server } from './server.js';

const PORT = envPort ?? 8080;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
