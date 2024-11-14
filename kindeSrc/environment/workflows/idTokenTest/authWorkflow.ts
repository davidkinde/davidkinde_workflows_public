/// <reference types="./kinde" />

export const workflowSettings = {
  id: "addAccessTokenClaim",
  name: "Modify Access Token",
  trigger: "user:tokens_generation",
  resetClaims: true,
  timeout: 10000,
  failurePolicy:{
    action: "continue"
  },
  bindings: {
    console: {},
    "kinde.fetch": {},
    "kinde.idToken": {
      resetClaims: true,
    },
    "kinde.env": {},
    "kinde.accessToken": {
      resetClaims: true,
    },
    'kinde.risk': {},
    'kinde.auth': {},
  },
};

const test_data = {
  "risk_score": 10,
}

export default {
  async handle(event: any) {

    // Setting Ccustom claims
    kinde.accessToken.setCustomClaim("email", "some@email.com");
    kinde.accessToken.setCustomClaim("custom_ip", "192.168.1.1");
    kinde.accessToken.setCustomClaim("this", "that");

    // Risk and deny access
    kinde.risk.setScore(test_data.risk_score);
    console.log("Risk Score", kinde.risk.getScore());
    if (kinde.risk.getScore() > 40) {
      kinde.auth.denyAccess('Risk score to high - access denied');
      console.log("Denying access...", "true");
    }

    // Environment variables access
    console.log("logging secure values", {
      env_var: kinde.env.get("test"),
      env_var_secure: kinde.env.get("test_secure"),
    });

    // Console logging
    console.log("logging from action", { hello: "world" });
    console.log("logging accesstoken", {
      custom_claims: kinde.accessToken.getCustomClaims(),
    });

    // Return values
    return "testing add user token claim";
  },
};
