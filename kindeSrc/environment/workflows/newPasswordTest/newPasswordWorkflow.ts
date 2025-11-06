import {
  onNewPasswordProvidedEvent,
  WorkflowSettings,
  WorkflowTrigger,
  invalidateFormField,
  secureFetch,
  fetch,
  getEnvironmentVariable,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "onNewPasswordProvided",
  trigger: WorkflowTrigger.NewPasswordProvided,
  failurePolicy: {
    action: "stop",
  },
  bindings: {
    "kinde.widget": {}, // Required for accessing the UI
    "kinde.secureFetch": {}, // Required for secure external API calls
    "kinde.env": {}, // required to access your environment variables
    "kinde.fetch": {}, // Required for management API calls
    url: {}, // required for url params
  },
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onNewPasswordProvidedEvent) {
  console.log("New password provided...", JSON.stringify(event.context.user, null, 2));
  kinde.auth.denyAccess('Fail test workflow');
}
