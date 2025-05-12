import app from './app.js';
import {connectDB} from './db.js';

import cors from 'cors';

app.use(cors())
connectDB()
app.listen(3000)

console.log('Server is running on port 3000')