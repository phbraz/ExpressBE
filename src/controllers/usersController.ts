import bcrypt from "bcryptjs";
import { Response, Request } from "express";
import { UserRole } from "../models/UserRole";
import { IRole } from "../models/Role";
import { IUser, User } from "../models/User";

interface UserRoleResponse {
    roleName: string,
    user: string
}


const CreateUser = async (req: Request, res: Response) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).send(user);
    }
    catch (error:any) {
        res.status(400).json({error: error.message});
    }
};

const FindAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}

const FindUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error:any) {
        res.status(403).json({error: error.message});
    }
}

const UpdateUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { name, email}, {new: true});

        if (!user) {
            return res.status(403).json({message: 'User not found'});
        }

        res.json(user);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}

const DeleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(403).json({message: 'User not found'});
        }

        res.json(user);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}

const FindAllRoles = async (req: Request, res: Response) => {
    try {
        const userRoles = await UserRole.find()
            .populate("userId", "name email")
            .populate("roleId", "name");

        if (!userRoles) {
            return res.status(403).json({message: "Can't find user role"});
        }

        const response: UserRoleResponse[] = [];

        userRoles.map(u => {
            const user = u.userId as IUser;
            const role = u.roleId as IRole;

            response.push({
                user: user.name,
                roleName: role.name,
            });
        });

        res.json(response);
    } catch (error:any) {
        res.status(500).json({error: error.message});
    }
}

export { CreateUser, FindAllUsers, FindUser, UpdateUser, DeleteUser, FindAllRoles }
