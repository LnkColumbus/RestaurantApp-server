import { Router } from 'express';
import { createTable, getTable, getTables } from '../controllers/table';

const router = Router();

router.get('/', getTables);
router.get('/:id', getTable);
router.post('/', createTable);

export default router;