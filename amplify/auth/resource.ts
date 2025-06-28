import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
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
