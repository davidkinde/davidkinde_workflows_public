import {hello} from "./hello"

export const workflowSettings = {
    id: 'addUserTokenClaim',
    trigger: 'user:tokens_generation',
    bindings: {
        console: {},
        'kinde.fetch': {},
        'kinde.idToken': {
            resetClaims: true
        },
        'kinde.accessToken': {
            resetClaims: true
        }
    }
};

export default {
    async handle(event: any) {
         const res = await kinde.fetch(
              'https://api.stakesocial.com/v1/get_sports',
              {
                method: 'GET',
                responseFormat: 'json'
              }
        );
        
        console.log('stakeRes', res);
        kinde.accessToken.setCustomClaim('sport', res.json.data[0].name);

        kinde.idToken.setCustomClaim('sport', res.json.data[1].name);
        
        return 'testing add user tokens claim';
    },

}
