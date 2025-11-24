import Express from 'express';
import goodsList from '../data/goods.js';

export default {
  index: (req: Express.Request, res: Express.Response) => {
    res.status(200).send(goodsList);
  },
};
