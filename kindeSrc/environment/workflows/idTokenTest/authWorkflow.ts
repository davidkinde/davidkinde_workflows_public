export const workflowSettings = {
  id: "addAccessTokenClaimX",
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
    kinde.accessToken.setCustomClaim("email", "some@email.com");
    kinde.accessToken.setCustomClaim("ip", "192.168.1.1");
    kinde.accessToken.setCustomClaim("custom_password", "ABC123");
    kinde.accessToken.setCustomClaim("custom_sensitive_password", "xyz456");
    kinde.accessToken.setCustomClaim("this", "that");
    kinde.accessToken.setCustomClaim("some", "other");
    console.log("logging from action", { hello: "world" });
    console.log("Kinde redaction test for www.kinde.com?xyz", {
      "http://kinde.com/xss-attack": "http://www.kinde.com/xss-attack",
    });

    // console.log("Replacement speed test", { test: "test 1" });
    // console.log("Replacement speed test", { test: "test 2" });
    // console.log("Replacement speed test", { test: "test 3" });
    // console.log("Replacement speed test", { test: "test 4" });
    // console.log("Replacement speed test", { test: "test 5" });
    // console.log("Replacement speed test", { test: "test 6" });
    // console.log("Replacement speed test", { test: "test 7" });
    // console.log("Replacement speed test", { test: "test 8" });
    // console.log("Replacement speed test", { test: "test 9" });
    // console.log("Replacement speed test", { test: "test 10" });
    // console.log("Replacement speed test", { test: "test 11" });
    // console.log("Replacement speed test", { test: "test 12" });
    // console.log("Replacement speed test", { test: "test 13" });
    // console.log("Replacement speed test", { test: "test 14" });
    // console.log("Replacement speed test", { test: "test 15" });
    // console.log("Replacement speed test", { test: "test 16" });
    // console.log("Replacement speed test", { test: "test 17" });
    // console.log("Replacement speed test", { test: "test 18" });
    // console.log("Replacement speed test", { test: "test 19" });
    // console.log("Replacement speed test", { test: "test 20" });
    // console.log("Replacement speed test", { test: "test 21" });
    // console.log("Replacement speed test", { test: "test 22" });
    // console.log("Replacement speed test", { test: "test 23" });
    // console.log("Replacement speed test", { test: "test 24" });
    // console.log("Replacement speed test", { test: "test 25" });
    // console.log("Replacement speed test", { test: "test 26" });
    // console.log("Replacement speed test", { test: "test 27" });
    // console.log("Replacement speed test", { test: "test 28" });
    // console.log("Replacement speed test", { test: "test 29" });
    // console.log("Replacement speed test", { test: "test 30" });
    // console.log("Replacement speed test", { test: "test 31" });
    // console.log("Replacement speed test", { test: "test 32" });
    // console.log("Replacement speed test", { test: "test 33" });
    // console.log("Replacement speed test", { test: "test 34" });
    // console.log("Replacement speed test", { test: "test 35" });
    // console.log("Replacement speed test", { test: "test 36" });
    // console.log("Replacement speed test", { test: "test 37" });
    // console.log("Replacement speed test", { test: "test 38" });
    // console.log("Replacement speed test", { test: "test 39" });
    // console.log("Replacement speed test", { test: "test 40" });
    // console.log("Replacement speed test", { test: "test 41" });
    // console.log("Replacement speed test", { test: "test 42" });
    // console.log("Replacement speed test", { test: "test 43" });
    // console.log("Replacement speed test", { test: "test 44" });
    // console.log("Replacement speed test", { test: "test 45" });
    // console.log("Replacement speed test", { test: "test 46" });
    // console.log("Replacement speed test", { test: "test 47" });
    // console.log("Replacement speed test", { test: "test 48" });
    // console.log("Replacement speed test", { test: "test 49" });
    // console.log("Replacement speed test", { test: "test 50" });
    // console.log("Replacement speed test", { test: "test 51" });
    // console.log("Replacement speed test", { test: "test 52" });
    // console.log("Replacement speed test", { test: "test 53" });
    // console.log("Replacement speed test", { test: "test 54" });
    // console.log("Replacement speed test", { test: "test 55" });
    // console.log("Replacement speed test", { test: "test 56" });
    // console.log("Replacement speed test", { test: "test 57" });
    // console.log("Replacement speed test", { test: "test 58" });
    // console.log("Replacement speed test", { test: "test 59" });
    // console.log("Replacement speed test", { test: "test 60" });
    // console.log("Replacement speed test", { test: "test 61" });
    // console.log("Replacement speed test", { test: "test 62" });
    // console.log("Replacement speed test", { test: "test 63" });
    // console.log("Replacement speed test", { test: "test 64" });
    // console.log("Replacement speed test", { test: "test 65" });
    // console.log("Replacement speed test", { test: "test 66" });
    // console.log("Replacement speed test", { test: "test 67" });
    // console.log("Replacement speed test", { test: "test 68" });
    // console.log("Replacement speed test", { test: "test 69" });
    // console.log("Replacement speed test", { test: "test 70" });
    // console.log("Replacement speed test", { test: "test 71" });
    // console.log("Replacement speed test", { test: "test 72" });
    // console.log("Replacement speed test", { test: "test 73" });
    // console.log("Replacement speed test", { test: "test 74" });
    // console.log("Replacement speed test", { test: "test 75" });
    // console.log("Replacement speed test", { test: "test 76" });
    // console.log("Replacement speed test", { test: "test 77" });
    // console.log("Replacement speed test", { test: "test 78" });
    // console.log("Replacement speed test", { test: "test 79" });
    // console.log("Replacement speed test", { test: "test 80" });
    // console.log("Replacement speed test", { test: "test 81" });
    // console.log("Replacement speed test", { test: "test 82" });
    // console.log("Replacement speed test", { test: "test 83" });
    // console.log("Replacement speed test", { test: "test 84" });
    // console.log("Replacement speed test", { test: "test 85" });
    // console.log("Replacement speed test", { test: "test 86" });
    // console.log("Replacement speed test", { test: "test 87" });
    // console.log("Replacement speed test", { test: "test 88" });
    // console.log("Replacement speed test", { test: "test 89" });
    // console.log("Replacement speed test", { test: "test 90" });
    // console.log("Replacement speed test", { test: "test 91" });
    // console.log("Replacement speed test", { test: "test 92" });
    // console.log("Replacement speed test", { test: "test 93" });
    // console.log("Replacement speed test", { test: "test 94" });
    // console.log("Replacement speed test", { test: "test 95" });
    // console.log("Replacement speed test", { test: "test 96" });
    // console.log("Replacement speed test", { test: "test 97" });
    // console.log("Replacement speed test", { test: "test 98" });
    // console.log("Replacement speed test", { test: "test 99" });
    // console.log("Replacement speed test", { test: "test 100" });

    console.log("logging accesstoken", {
      custom_claims: kinde.accessToken.getCustomClaims(),
    });
    return "testing add user token claim";
  },
};
