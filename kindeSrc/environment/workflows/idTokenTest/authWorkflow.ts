import { onUserTokenGeneratedEvent,  accessTokenCustomClaims, WorkflowSettings, WorkflowTrigger, getEnvironmentVariable } from "@kinde/infrastructure"

export const workflowSettings: WorkflowSettings = {
  id: "addAccessTokenClaim",
  trigger: WorkflowTrigger.UserTokenGeneration,
  bindings: {
    "kinde.accessToken": {
      resetClaims: true,
    },
  },
};
  
export default {
  async handle(event: onUserTokenGeneratedEvent) {
    
    const accessToken = accessTokenCustomClaims<{ key_number: string, key_string: string, key_sensitive: string, hello: string; ipAddress: string; sub: string}>();
    accessToken.hello = "Hello there!";
    accessToken.ipAddress = event.request.ipAddress
    accessToken.key_number = getEnvironmentVariable("KEY_NUMBER")
    accessToken.key_string = getEnvironmentVariable("KEY_STRING")
    accessToken.key_sensitive = getEnvironmentVariable("KEY_SENSITIVE")

    
  },
};