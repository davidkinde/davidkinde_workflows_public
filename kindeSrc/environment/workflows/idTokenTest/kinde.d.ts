interface kindeEvent {
    request: {
        auth: {};
        ip: string;
    };
    context: {
        application: {
            clientId: string;
        };
        workflow: {
            trigger: string;
        };
        domains: {
            kindeDomain: string;
        };
    };
}

interface workflowContext {
    auth: {
        action: string;
        reason: string;
    };
    risk: {
        score: number;
    };
    idToken: {};
    accessToken: {};
    m2mToken: {};
}

declare type envValue = {
    value?: any;
    isSecret: boolean;
};

declare namespace kinde {
    export function fetch(url: string, options: unknown): Promise<any>;

    namespace env {
        export function get(key: string): envValue;
    }
    namespace idToken {
        export function setCustomClaim(key: string, value: unknown): void;
        export function getCustomClaims(): unknown;
    }
    namespace accessToken {
        export function setCustomClaim(key: string, value: unknown): void;
        export function getCustomClaims(): unknown;
    }
    namespace m2mToken {
        export function setCustomClaim(key: string, value: unknown): void;
        export function getCustomClaims(): unknown;
    }

    namespace auth {
        export function denyAccess(reason: string): void;
    }

    namespace risk {
        export function setScore(score: number): void;
        export function getScore(): number;
    }
}
