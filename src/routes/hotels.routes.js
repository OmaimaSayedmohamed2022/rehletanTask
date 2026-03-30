import express from 'express'
import  { 
    getHotelsController 
} from "../controllers/hotels.controller.js"

const router = express.Router()

router.get('/',getHotelsController)


export default router;

