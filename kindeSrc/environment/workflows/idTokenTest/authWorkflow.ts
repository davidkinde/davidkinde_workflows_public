import {hello} from "./hello"

export const workflowSettings = {
    id: 'addUserTokenClaimUpdated',
    trigger: 'user:tokens_generation',
    resetClaims: true
};

export default {
    async handle(event: any) {
        kinde.idToken.setCustomClaim('random', 'test');
        return 'testing add user token claim';
    },

}