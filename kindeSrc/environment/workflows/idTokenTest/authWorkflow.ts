export const workflowSettings = {
    id: "addAccessTokenClaim",
    name: "Modify Access Token",
    trigger: "user:tokens_generation",
    resetClaims: true,
    timeout: 10000,
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
      kinde.accessToken.setCustomClaim("hello", "testing world updated");
      return "testing add user token claim";
    },
  };
  