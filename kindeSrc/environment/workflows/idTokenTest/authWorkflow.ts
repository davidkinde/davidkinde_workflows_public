import { onUserTokenGeneratedEvent,  accessTokenCustomClaims, WorkflowSettings, WorkflowTrigger, getEnvironmentVariable, denyAccess } from "@kinde/infrastructure"

export const workflowSettings: WorkflowSettings = {
  id: "addAccessTokenClaim",
  trigger: WorkflowTrigger.UserTokenGeneration,
  bindings: {
    "kinde.accessToken": {
      resetClaims: true,
    },
    "kinde.env": {},
  },
};
  
export default {
  async handle(event: onUserTokenGeneratedEvent) {
    
    const accessToken = accessTokenCustomClaims<{ key_number: number, key_string: string, key_sensitive: string, hello: string; ipAddress: string; sub: string}>();
    accessToken.hello = "Hello there!";
    accessToken.ipAddress = event.request.ipAddress
    accessToken.key_number = getEnvironmentVariable<number>("KEY_NUMBER").value
    accessToken.key_string = getEnvironmentVariable("KEY_STRING").value
    accessToken.key_sensitive = getEnvironmentVariable("KEY_SENSITIVE").value

    denyAccess("You shall not pass!");
    
  },
};