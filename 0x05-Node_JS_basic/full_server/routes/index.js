import { AppController } from '../controllers/AppController';
import { StudentsController } from '../controllers/StudentsController';

const express = require('express');
const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students/:major?', StudentsController.getAllStudents);

export default router;
