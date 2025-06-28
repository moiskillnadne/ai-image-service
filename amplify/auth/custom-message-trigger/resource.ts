import { defineFunction } from "@aws-amplify/backend";


export const customMessageTriggerFn = defineFunction({
  name: "customMessageTriggerFn",
  entry: "./handler.ts",
  memoryMB: 256
})