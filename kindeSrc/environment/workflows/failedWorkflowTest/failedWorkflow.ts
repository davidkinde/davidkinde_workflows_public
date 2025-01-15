export const workflowSettings = {
};

export default {
  async handle(event: any) {

    kinde.accessToken.setCustomClaim("hello", "world");
    return "testing failed workflow";
  },
};
