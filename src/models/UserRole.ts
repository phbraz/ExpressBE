import mongoose, { Schema, Document, Types } from "mongoose"

interface IUserRole extends Document {
    userId: Types.ObjectId,
    roleId: Types.ObjectId
}

const UserRoleSchema: Schema<IUserRole> = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    roleId: {
        type: Schema.Types.ObjectId,
        ref: "Role",
        required: true
    }
});

export default mongoose.model<IUserRole>("UserRole", UserRoleSchema);