require('dotenv').config();
const server = require('./server');

const { PORT } = process.env;

server.listen(PORT, () => console.log(`Server at work at port ${PORT}`));
