export const workflowSettings = {
    id: "addM2MTokenClaim",
    trigger: "m2m:token_generation",
    name: "Modify M2M Token",
    resetClaims: true,  
    failurePolicy:{
      action: "continue"
    },
    bindings: {
      "kinde.m2mToken": {},
      'kinde.risk': {},
      'kinde.auth': {},
    },
  };

  const test_data = {
    "risk_score": 99,
  }
  
  
  export default {
    async handle(event: any) {

      // Setting custom claims
      kinde.m2mToken.setCustomClaim("custom_workflow_claim_key", "custom_workflow_claim_value");

      // Risk and deny access
      kinde.risk.setScore(test_data.risk_score);
      console.log("Risk Score", kinde.risk.getScore());
      if (kinde.risk.getScore() > 40) {
        kinde.auth.denyAccess('Risk score to high - access denied');
        console.log("Denying access...", "true");
      }

      return "testing m2m tokens";
    },
  };
  