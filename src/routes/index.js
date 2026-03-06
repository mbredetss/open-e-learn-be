import { Router } from 'express';
import registrations from  '../services/registrations/routes/index.js';

const router = Router();

router.use('/registry', registrations);

export default router;