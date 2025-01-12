import * as express from 'express';
import db from '../config/db';

const router = express.Router();

router.get('/antikas', async (req, res) => {
    // const examples = await Example.collection.find();
    const result = await db.listAll();
    console.log(' ==> Get result:', result);
    res.json(result);
});

/**
 * test:
 * 
 * curl -X POST localhost:5000 -H "Content-Type: application/json" -d '{"name":"洛可可咖啡壶","description":"咖啡套装：本特-洛可可风格，镀银和新艺术派圆形托盘, 带葡萄装饰的镍银。咖啡壶、糖碗和奶油壶。","path":"/images/rokokostil-kaffesaet.jpg"}'
 */
router.post('/', async (req, res) => {
    const name = req.body?.name;
    const description = req.body?.description;
    const path = req.body?.path;

    if (!name || !description || !path) {
        res.json({
            message: 'Invalid Data!'
        });
        return;
    }
    await db.addItem({
        name, description, path 
    });
    res.json({
        message: 'Data received successfully!'
    })
});

export default router;
