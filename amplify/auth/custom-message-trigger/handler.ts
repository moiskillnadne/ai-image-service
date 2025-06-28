import type { CustomMessageTriggerHandler } from "aws-lambda"


export const handler: CustomMessageTriggerHandler = async (event) => {

  console.log("Auto-confirming user during pre-signup trigger", event)

  const { triggerSource } = event

  const { codeParameter } = event.request

  // Handle other custom message scenarios
  if (triggerSource === "CustomMessage_UpdateUserAttribute") {

    event.response.emailSubject = "Welcome to Trend Image AI"
    event.response.emailMessage = `
      <p>Welcome to Trend Image AI</p>
      <p>Your code is ${codeParameter}</p>
    `
  }

  return event
}
