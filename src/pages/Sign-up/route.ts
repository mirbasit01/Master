import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendverificationemail";


 export async function POST(request: Request) {
    await dbConnect();
   try {
         const { username, email, password } = await request.json();
         await UserModel.deleteMany({});

    
   } catch (error) {
    console.log('Error in POST request:', error);
    return Response.json({
        Success: false,
        Message: 'Error in POST request',
    }, 
    {
        status: 500,
    }
)
    
   }
}