import 'dotenv/config'
import server from './server/index.js';

const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});