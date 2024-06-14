import { Router } from "express";
import { seedRoles, seedUserRole } from "../controllers/seedDataController";

const router = Router();

router.get("/roles", seedRoles);
router.get("/userrole", seedUserRole);

export default router;
