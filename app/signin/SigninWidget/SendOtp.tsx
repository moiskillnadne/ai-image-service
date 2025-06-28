'use client'
import { confirmSignIn, signIn } from "aws-amplify/auth";
import { EmailInput } from "../components/EmailInput";

type Props = {
  onSendCode: () => void
  email: string
  setEmail: (email: string) => void
}

export const SendOtp = ({ onSendCode, email, setEmail }: Props) => {

  const handleSendCode = async () => {
    console.log('Sending code to:', email);

    const result = await signIn({
      username: email,
      options: {
        authFlowType: "USER_AUTH",
        preferredChallenge: "EMAIL_OTP"
      }
    })

    console.log(result)

    if(result.nextStep?.signInStep === "CONTINUE_SIGN_IN_WITH_FIRST_FACTOR_SELECTION") {
      const confirmResult = await confirmSignIn({
        challengeResponse: "EMAIL_OTP"
      })
      console.log(confirmResult)
    }

    if(result.nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_EMAIL_CODE") {
      onSendCode()
    }
  };

  return (
    <div>
      <EmailInput
        email={email}
        onEmailChange={(e) => setEmail(e.target.value)}
        disabled={false}
      />

      <div className="text-center mt-6">
        <button 
          type="button" 
          onClick={handleSendCode}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
          Отправить код
        </button>
      </div>
    </div>
  )
}