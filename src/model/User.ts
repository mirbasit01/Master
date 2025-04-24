 import mongoose , {Schema , Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date;

}

const messageSchema: Schema<Message> = new Schema({ 
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },

})

export interface User extends Document{
     username: string;
     email: string;
     password: string;
     verifyCode: string;
     verifyCodeExpiry: Date;
     isVerified: boolean;
     isAccecptedMessage: boolean;
     messages: Message[];


}

const UserSchema: Schema<User> = new Schema({ 
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,

    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],

    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // minlength: [6, 'Password must be at least 6 characters long'],
    },
    verifyCode: {
        type: String,
        required: [true, 'verifyCode is required'],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'verifyCodeExpiry is required'],

    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAccecptedMessage: {
        type: Boolean,
        default: true,
    },
    messages: [messageSchema],

    

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;