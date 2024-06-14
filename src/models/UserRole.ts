import mongoose, { Schema, Document, Types,  model } from "mongoose";
import { IRole } from "./Role";
import { IUser } from "./User";

interface IUserRole extends Document {
    roleId: Types.ObjectId | IRole;
    userId: Types.ObjectId | IUser;
}

const UserRoleSchema = new Schema<IUserRole>({
    roleId: { type: Schema.Types.ObjectId, ref: "Role", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const UserRole = model<IUserRole>("UserRole", UserRoleSchema);

export { UserRole, IUserRole }
