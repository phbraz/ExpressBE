import { Router } from "express";
import {
    CreateUser,
    DeleteUser,
    FindAllUsers,
    FindUser,
    FindUserRole,
    UpdateUser
} from "../controllers/usersController";

const router = Router();

//creating a new user test
router.post("/", CreateUser);
//find all users
router.get("/", FindAllUsers);
//find user by id
router.get("/:id", FindUser);
//Updating user.
router.put("/:id", UpdateUser);
//delete user
router.delete("/:id", DeleteUser);
//find user related roles
router.get("/findUserRole", FindUserRole);

export default router;
