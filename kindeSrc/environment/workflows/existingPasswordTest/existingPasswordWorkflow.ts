import {
	WorkflowTrigger,
	fetch,
	secureFetch,
	createKindeAPI,
	getEnvironmentVariable,
	invalidateFormField
} from "@kinde/infrastructure";

export const workflowSettings = {
	id: "onExistingPasswordProvided",
	name: 'User migration from AAD B2C',
	trigger: WorkflowTrigger.ExistingPasswordProvided,
	failurePolicy: {
		action: "stop",
	},
	bindings: {
		"kinde.widget": {}, // Required for accessing the UI
		"kinde.env": {}, // required to access your environment variables
		"kinde.fetch": {}, // Required for external and Kinde management API calls
		"kinde.secureFetch": {}, // Required for external API calls
		"url": {}, // required for url params
	},
};

interface RopcResponse {
	given_name?: string
	family_name?: string
	user_id: string
}
interface Tenant {
	Id: string
	Name: string
	KindeOrganizationCode?: string
}


export default async function Workflow(event: any) {
	const { hashedPassword, providedEmail, password, hasUserRecordInKinde } = event.context.auth;

	if (hasUserRecordInKinde) {
    console.log('found user already, aborting');
		return;
	}

	if (password === 'hello123') {
		invalidateFormField("p_password", "Email or password not found");
		return;
	}
	
	// create the user in Kinde and set the password
	const kindeAPI = await createKindeAPI(event);
  console.log('Creating user');
	const { data: userResponse } = await kindeAPI.post({
		endpoint: `user`,
		params: JSON.stringify({
			profile: {
				given_name: 'Test',
				family_name: 'Daniel',
			},
			identities: [
				{
					type: "email",
					details: {
						email: providedEmail,
					},
					is_verified: true
				},
			],
		}) as unknown as Record<string, string>
	});
  console.log('User created reponse', userResponse);
	const userId = userResponse.id;

	console.log(await kindeAPI.put({
		endpoint: `users/${userId}/password`,
		params: {
			hashed_password: '123',
		},
	}));

}
