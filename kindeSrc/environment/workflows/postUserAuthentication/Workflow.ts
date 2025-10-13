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

	const { providedEmail } = event.context.auth;

	denyAccess(`${providedEmail} is denied!`)
  }