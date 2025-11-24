import Express from 'express';
import goodsController from '../controllers/goodsController.js';

const router = Express.Router();

router.get('/goods', goodsController.index);

export default router;
