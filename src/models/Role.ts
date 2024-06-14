import mongoose, { Schema, Document } from "mongoose";

interface IRole extends Document {
    name:string
};

const RoleSchema: Schema<IRole> = new Schema({
    name: { type: String, required: true },
});

export default mongoose.model<IRole>("Role", RoleSchema);