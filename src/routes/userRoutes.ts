import { Router } from "express";
import { CreateUser, DeleteUser, FindAllUsers, FindUser, UpdateUser } from "../controllers/usersController";

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

export default router;
