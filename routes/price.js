import express from 'express';
import { addItemToBasePriceTable, addItemToSlotPriceTable, deleteBasePriceTable, deleteSlotPriceTable, getBasePriceTable, getSlotPriceTable, updateBasePriceTable, updateSlotPriceTable } from '../controller/route.js';
const router = express.Router();
//router.use(express.json());

router.get("/basePrice",getBasePriceTable);
router.get("/slotPrice",getSlotPriceTable);
router.post("/addBasePrice",addItemToBasePriceTable);
router.post("/addSlotPrice",addItemToSlotPriceTable);
router.put("/updateSlotPrice/:id",updateSlotPriceTable);
router.put("/updateBasePrice/:id",updateBasePriceTable);
router.delete("/deleteBasePrice/:id",deleteBasePriceTable);
router.delete("/deleteSlotPrice/:id",deleteSlotPriceTable);
export default router;