import {hello} from "./hello"

export const workflowSettings = {
    id: 'addM2MClaim',
    trigger: 'm2m:token_generation',
    bindings: {
        console: {},
        'kinde.m2mToken': {
            resetClaims: true
        }
    }
};

export default {
    async handle(event: any) {

        
        console.log("hello world");
        console.log("hello world 2");
        kinde.m2mToken.setCustomClaim('chicken', 'egg');
        
        return 'testing add M2M tokens claim';
    },

}
