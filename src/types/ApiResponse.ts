import { Message } from "@/model/User";
export interface ApiResponse {

    Success: boolean;
    Message: string;
    isAcceptedMessage?: boolean;
    messages?: Array<Message>;

}