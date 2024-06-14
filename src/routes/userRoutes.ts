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

/**
 * @swagger
 * /users:
 *  get:
 *    description: Retrieve a list of users
 *    responses:
 *      '200':
 *        description: A successful response
 */
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
