import { Router } from "express";
import { createUsers, getUserByDocumentoNumber, getUsers , getUserById, updateUserById, deleteUserById} from "../controllers/users.controller";

const router = Router();

router.get("/", getUsers);
router.get('/document/:document', getUserByDocumentoNumber)
router.get('/id/:id', getUserById)
router.post("/", createUsers);
router.put('/update/:id',updateUserById)
router.delete('/delete/:id',deleteUserById)


export default router