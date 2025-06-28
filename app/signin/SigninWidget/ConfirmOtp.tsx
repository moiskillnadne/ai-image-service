'use client'
import { confirmSignIn } from "aws-amplify/auth"
import { CodeInput } from "../components/CodeInput"

type Props = {
  code: string
  setCode: (code: string) => void
  onConfirm: () => void
}

export const ConfirmOtp = ({ code, setCode, onConfirm }: Props) => {

  const handleConfirmCode = async () => {
    console.log('Confirming code:', code);

    const result = await confirmSignIn({
      challengeResponse: code
    })

    console.log(result)

    if(result.nextStep.signInStep === "DONE") {
      onConfirm()
    }
  }

  return (
    <div>
      <CodeInput
          code={code}
          onCodeChange={(e) => setCode(e.target.value)}
          disabled={false}
        />

      <div className="text-center mt-6">
        <button 
          type="button" 
          onClick={handleConfirmCode}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
          Войти
        </button>
      </div>
    </div>
  )
}