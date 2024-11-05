export const workflowSettings = {
    id: "addM2MTokenClaim",
    trigger: "m2m:token_generation",
    name: "Modify M2M Token",
    resetClaims: true,  
    failurePolicy:{
      action: "continue"
    },
    bindings: {
    },
  };
  
  export default {
    async handle(event: any) {
      kinde.m2mToken.setCustomClaim("customworkflowclaim", "custom m2m claim v3");
      return "testing m2m tokens";
    },
  };
  