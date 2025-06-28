import { useState } from "react"
import { ConfirmOtp } from "./ConfirmOtp"
import { SendOtp } from "./SendOtp"

type Props = {
  step: "SEND_CODE" | "CONFIRM_CODE"
  setStep: (step: "SEND_CODE" | "CONFIRM_CODE") => void
}

export const SigninWidget = ({ step, setStep }: Props) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  return (
    <div>
      {step === "SEND_CODE" && <SendOtp onSendCode={() => setStep("CONFIRM_CODE")} email={email} setEmail={setEmail} />}
      {step === "CONFIRM_CODE" && <ConfirmOtp code={code} setCode={setCode} onConfirm={() => {}} />}
    </div>
  )
}