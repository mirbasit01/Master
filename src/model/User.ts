import mongoose , {Schema , Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date;

}

const messageSchema: Schema = new Schema<Message>({ 
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})