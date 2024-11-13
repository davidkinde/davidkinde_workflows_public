import {
  m2mTokenClaims,
  onUserTokenGeneratedEvent,
  WorkflowSettings,
  WorkflowTrigger,
} from "@kinde/infrastructure";

export const workflowSettings: WorkflowSettings = {
  id: "addM2MTokenClaim",
  trigger: "m2m:token_generation",
  bindings: {
    "kinde.m2mToken": {},
  }
};

export default {
  async handle(event: onUserTokenGeneratedEvent) {
    const m2mToken = m2mTokenClaims<{
      hello: string;
    }>();

    m2mToken.hello = "World!";
  },
};