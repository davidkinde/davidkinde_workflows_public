import {
	onUserPreRegistrationEvent, //onPostAuthenticationEvent, //onUserTokenGeneratedEvent,
	WorkflowSettings,
	WorkflowTrigger,
	accessTokenCustomClaims,
	getEnvironmentVariable,
	denyAccess,
  } from "@kinde/infrastructure";
  
  export const workflowSettings: WorkflowSettings = {
	id: "nonPersistentSessionWorkflow",
	name: "Non Persistent Session Workflow",
	trigger: WorkflowTrigger.UserPreRegistration,
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
	event: onUserPreRegistrationEvent // onPostAuthenticationEvent //onUserTokenGeneratedEvent
  ) {

	const { email } = event.context.auth;
	if (email && email.includes("fail")) {
		console.log("Denying access for " + email);
		denyAccess(`Pre-registration: Workflow denied access for ${email}.`)
	}
}