import express from 'express';
import { getDashboardController,
    agregarSuperheroeController,
    editarSuperheroeController} from '../controllers/superheroesController.mjs';


/*******************************************************************************
                    TRABAJO PRACTICO N°3  - ROUTERS  
 *****************************************************************************  */

const router = express.Router();

router.get("/", getDashboardController);
router.get("/agregar", agregarSuperheroeController);
router.get("/editar/:id", editarSuperheroeController);


export default router;

/*******************************************************************************
 *****************************************************************************  */