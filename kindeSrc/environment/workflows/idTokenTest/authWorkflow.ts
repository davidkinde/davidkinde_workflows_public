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

  },
};

export default {
  async handle(event: any) {
    kinde.accessToken.setCustomClaim("email", "some@email.com");
    kinde.accessToken.setCustomClaim("ip", "192.168.1.1");
    kinde.accessToken.setCustomClaim("this", "that");
    console.log("logging from action", { hello: "world" });
    console.log("logging accesstoken", {
      custom_claims: kinde.accessToken.getCustomClaims(),
    });
    return "testing add user token claim";
  },
};
