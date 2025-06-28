import { defineAuth } from "@aws-amplify/backend";
import { customMessageTriggerFn } from "./custom-message-trigger/resource";

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    customMessage: customMessageTriggerFn
  },
  multifactor: {
    mode: 'OFF'
  },
  userAttributes: {
    email: {
      required: true,
      mutable: true
    }
  },
  senders: {
    email: {
      fromEmail: 'vitya.ryabkov@gmail.com',
      fromName: 'Trend Image AI'
    },
  }
});
