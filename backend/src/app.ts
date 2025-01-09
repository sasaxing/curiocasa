import * as express from 'express';
import db from './config/db';
import exampleRoute from './routes/main';
import * as cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// Middleware
app.use(express.json());

// Connect Database
db.connectDB();

// Routes
app.use('/', exampleRoute);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
