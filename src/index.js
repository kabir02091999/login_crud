import app from './app.js';
import {run} from './db.js';

run().catch(console.dir);

app.listen(3000)

console.log('Server is running on port 3000')