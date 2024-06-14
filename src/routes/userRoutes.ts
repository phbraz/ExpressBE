import { Router } from "express";
import {
    CreateUser,
    DeleteUser, FindAllRoles,
    FindAllUsers, FindRoleByUser,
    FindUser,
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
//find users related roles
router.get("/roles/findAllUserRoles", FindAllRoles);
//find role by user
router.get("/roles/findUserRole/:id", FindRoleByUser);

export default router;
