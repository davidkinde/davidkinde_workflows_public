import { onUserTokenGeneratedEvent,  accessTokenCustomClaims, WorkflowSettings, WorkflowTrigger } from "@kinde/infrastructure"

export const workflowSettings: WorkflowSettings = {
  id: "addM2MTokenClaim",
  trigger: WorkflowTrigger.M2MTokenGeneration,
  
};
  
export default {
  async handle(event: onUserTokenGeneratedEvent) {
    
    const accessToken = accessTokenCustomClaims<{ hello: string; ipAddress: string; sub: string}>();
    accessToken.hello = "Hello there!";
    accessToken.ipAddress = event.request.ipAddress
  },
};