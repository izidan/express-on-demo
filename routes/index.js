import Controller from '../controllers/countries.js';
import { Router } from 'express';

const controller = new Controller();
const router = Router();

router.delete('/api/countries/:id', controller.findByIdAndDelete.bind(controller));
router.patch('/api/countries/:id', controller.findByIdAndUpdate.bind(controller));
router.put('/api/countries/:id', controller.findByIdAndReplace.bind(controller));
router.get('/api/countries/:id', controller.findById.bind(controller));

router.delete('/api/countries', controller.deleteMany.bind(controller));
router.patch('/api/countries', controller.updateMany.bind(controller));
router.post('/api/countries', controller.insertMany.bind(controller));
router.put('/api/countries', controller.replaceMany.bind(controller));
router.get('/api/countries', controller.find.bind(controller));

export default router;