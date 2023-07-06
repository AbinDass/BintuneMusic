// admin login
import express from 'express';
import {adminLogin} from '../controller/admin/login.js';
const router = express.Router();

router.get('/', adminLogin)

export default router;