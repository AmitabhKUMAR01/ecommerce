import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    photo: string;
    role:"admin"|"user";
    gender: "male"|"female";
    dob:Date;
    createdAt: Date;
    updatedAt: Date;
    //virtual attributes
    age: number;
}
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true,"please enter id"],
    },
    name: {
        type: String,
        required: [true,"please enter name"],
    },
    email: {
        type: String,
        required: [true,"please enter email"],
        unique: true,
        validate:validator.default.isEmail
    },
    photo:{
        type: String,
        required: [true,"please enter photo"],
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default:  "user"
    },
    gender:{
        type: String,
        enum: ["male", "female"],
        required: [true,"please enter gender"],
    },
    dob:{
        type: Date,
        required: [true,"please enter dob"],
    }
},{
    timestamps: true
})

schema.virtual("age").get(function (data) {
    const today = new Date();
    const dob = this.dob
    let age = today.getFullYear() - dob.getFullYear();
    if(today.getMonth()<dob.getMonth() || (today.getMonth()===dob.getMonth() && today.getDate()<dob.getDate())){
        age--;
    }
    return age;
})
export const User = mongoose.model<IUser>("User",schema);
