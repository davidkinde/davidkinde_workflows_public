import {
	onUserTokenGeneratedEvent,
	WorkflowSettings,
	WorkflowTrigger,
	accessTokenCustomClaims,
	getEnvironmentVariable,
	denyAccess,
  } from "@kinde/infrastructure";
  
  export const workflowSettings: WorkflowSettings = {
	id: "nonPersistentSessionWorkflow",
	name: "Non Persistent Session Workflow",
	trigger: WorkflowTrigger.UserTokenGeneration,
	bindings: {
	  "kinde.accessToken": {},
	  "kinde.ssoSession": {},
	  "kinde.env": {},
	  "kinde.auth": {}
	},
	failurePolicy: {
	  action: "stop",
	},
  };
  
  export default async function NonPersistentSessionWorkflow(
	event: onUserTokenGeneratedEvent
  ) {

	//const { providedEmail } = event.context.auth;
	// kinde.auth.denyAccess('Risk score to high - access denied');
	if (event.context.user.id == "kp_98fa13e493104b869b794d19c6448769") {
		console.log("Denying access for " + event.context.user.id);
		denyAccess(`Workflow denied acces for ${event.context.user.id}.`)
	}
}