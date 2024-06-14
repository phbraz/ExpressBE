import mongoose, { Schema, Document, Types, model } from "mongoose";

interface IRole extends Document {
    _id: Types.ObjectId,
    name:string
}

const RoleSchema: Schema<IRole> = new Schema({
    name: { type: String, required: true },
});

const Role = model<IRole>("Role", RoleSchema);

export { Role, IRole }
