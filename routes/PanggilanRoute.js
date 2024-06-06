import express from "express";
import {
    getPanggilan,
    getPanggilanById,
    createPanggilan,
    updatePanggilan,
    deletePanggilan
} from "../controllers/PanggilanController.js";

const router = express.Router();

router.get('/panggilan', getPanggilan);
router.get('/panggilan/:id', getPanggilanById);
router.post('/panggilan', createPanggilan);
router.patch('/panggilan/:id', updatePanggilan);
router.delete('/panggilan/:id', deletePanggilan);

export default router;