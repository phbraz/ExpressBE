import mongoose, { Schema, Types, Document, model } from "mongoose";

interface IUser extends Document {
    _id: Types.ObjectId,
    name: string,
    email: string,
    password: string,
}

const UserSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = model<IUser>("User", UserSchema);

export { User, IUser }
