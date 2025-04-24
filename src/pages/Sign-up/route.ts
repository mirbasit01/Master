import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendverificationemail";


export async function POST(request: Request) {
    await dbConnect();
    try {
        const { username, email, password } = await request.json();
        const existinguserVerifiedByusername = await UserModel.findOne({
            username,
            isVerified: true,
        })
        if (existinguserVerifiedByusername) {
            return Response.json({
                Success: false,
                Message: 'Username already exists',
            },
                {
                    status: 409,
                }
            )
        }

        const existinguserVerifiedByEmail = await UserModel.findOne({ email })
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
        if (existinguserVerifiedByEmail) {
            if (existinguserVerifiedByEmail.isVerified) {
                return Response.json({
                    Success: false,
                    Message: 'Email already exists',
                },
                    {
                        status: 409,
                    }
                )
            } else {
                const hashedPassword = await bcrypt.hash(password, 10)
                existinguserVerifiedByEmail.password = hashedPassword
                existinguserVerifiedByEmail.verifyCode = verifyCode
                existinguserVerifiedByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000) // 1 hour from now
                await existinguserVerifiedByEmail.save()





            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            const expiryData = new Date()
            expiryData.setHours(expiryData.getHours() + 1);


            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryData,
                isVerified: false,
                isAccecptedMessage: true,
                messages: []

            })
            await newUser.save()
        }
        const Emaileresponse = await sendVerificationEmail(
            email,
            username,
            verifyCode
        )

        if (!Emaileresponse.Success) {
            return Response.json({
                Success: false,
                Message: Emaileresponse.Message,
            },
                {
                    status: 500,
                }
            )

        }
        return Response.json({
            Success: true,
            Message: 'User created successfully. please check your email for verification code',
        },
            {
                status: 201,
            }
        )




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