import express from "express"
import {
     createTransactions,
     getTransactionsByUserId ,
     deleteTransactions , 
     getSummeryByUserId
     } from "../controllers/transactionsController.js"

const router = express.Router();

router.get('/:userId' , getTransactionsByUserId)
router.post('/', createTransactions)
router.delete('/:id' , deleteTransactions)
router.get('/summary/:userId' ,getSummeryByUserId )

export default router;
