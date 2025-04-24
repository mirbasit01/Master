import { resend } from './../lib/Resend';
import VerificationEmail from '../../emails/Verificationemail';
import { ApiResponse } from '@/types/ApiResponse';


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
 ): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verify your email address',
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return {
            Success: true,
            Message: 'Verification email sent successfully.',
        }
        
    } catch (emaiError ) {
        console.error('Error sending verification email:', emaiError);
        return {
            Success: false,
            Message: 'Failed to send verification email.',
        };
        
    }
 }
 