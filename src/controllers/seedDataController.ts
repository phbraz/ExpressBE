import mongoose from "mongoose";
import Role from "../models/Role";
import UserRole from "../models/UserRole";
import { Request, Response } from "express"
import User from "../models/User";


const seedRoles = async (req: Request, res: Response) => {
    try {
        const findRoles = await Role.find();

        if (findRoles.length > 1) {
            return res.status(400).json({message: "Role already exists"});
        }

        const roles = [
            { name: "Admin" },
            { name: "Developer" },
            { name: "User"}
        ];
        await Role.insertMany(roles);
        return res.status(200).json({ message: "Roles seeded successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error seeding roles" });
    }
};

const seedUserRole = async (req: Request, res: Response) => {
    try {
        const findUserRoles = await UserRole.find();
        if (findUserRoles.length > 1) {
            return res.status(400).json({message: "User role already exists"});
        }

        const adminRole = await Role.findOne({ name: "Admin"});
        const devRole = await Role.findOne({ name: "Developer" });

        const devUser = await User.findById("666b0cda16f869feafe2b0df");
        const adminUser = await User.findByIdAndUpdate("666b37f0375804ab6a0e6c37");


        const userRole = new UserRole({
            userId: devUser!._id,
            roleId: devRole!._id
        });
        await userRole.save();

        const adminUserRole = new UserRole({
            userId: adminUser!._id,
            roleId: adminRole!._id
        });
        await adminUserRole.save();

        return res.status(200).json({ message: "User Roles added successfully" });

    } catch (err) {
        res.status(500).json({error: err});
    }
};

export { seedRoles, seedUserRole }

