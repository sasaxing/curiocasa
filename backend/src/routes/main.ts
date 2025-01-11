import * as express from 'express';
import db from '../config/db';

const router = express.Router();

router.get('/curios', async (req, res) => {
    // const examples = await Example.collection.find();
    const result = await db.listAll();
    console.log(' ==> Get result:', result);
    res.json(result);
});

router.post('/', async (req, res) => {
    // add a new record to mongodb
});

export default router;
