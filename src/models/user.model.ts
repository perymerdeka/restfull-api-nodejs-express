import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


// interface for user
export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createAt: Date;
    updatedAt: Date;

    // comparing password with Promise
    comparePassword(candidatePassword: string): Promise<boolean>;
};

// db Model Schema init
const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);


// compare password method
UserSchema.methods.comparePassword = async function(
    candidatePassword: string
) {
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

// hashing password method schema
UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    let user = this as UserDocument;
    if (!user.isModified("password")) return next();

    // random add data
    const salt = await bcrypt.genSalt(config.get("SaltWorkfactor"));
    const hash = await bcrypt.hashSync(user.password, salt);

    // replacing hashing password
    user.password = hash;

    return next();
});

// init models
const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;