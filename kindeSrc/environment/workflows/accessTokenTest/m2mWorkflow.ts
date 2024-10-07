export const workflowSettings = {
    id: "addM2MTokenClaim",
    trigger: "m2m:token_generation",
    resetClaims: true,
    bindings: {
      console: {},
      "kinde.fetch": {},
      "kinde.idToken": {
        resetClaims: true,
      },
      "kinde.accessToken": {
        resetClaims: true,
      },
    },
  };
  
  export default {
    async handle(event: any) {
      return "testing m2m tokens";
    },
  };
  