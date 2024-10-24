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
  },
};

export default {
  async handle(event: any) {
    kinde.accessToken.setCustomClaim("email", "some@email.com");
    kinde.accessToken.setCustomClaim("ip", "192.168.1.1");
    kinde.accessToken.setCustomClaim("this", "that");


    kinde.env.get("test");
    kinde.env.get("test_secure");

    console.log("logging from action", { hello: "world" });
    console.log("logging accesstoken", {
      custom_claims: kinde.accessToken.getCustomClaims(),
    });
    return "testing add user token claim";
  },
};
