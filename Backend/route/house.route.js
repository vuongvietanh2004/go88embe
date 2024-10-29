import express from 'express'
import { getHouse } from '../controller/house.controller.js'

const router=express.Router();

router.get("/", getHouse);

export default router;