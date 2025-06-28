import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

const backend = defineBackend({
  auth,
  data,
});

const { cfnResources } = backend.auth.resources;
const { cfnUserPool, cfnUserPoolClient } = cfnResources;

cfnUserPool.addPropertyOverride(
  'Policies.SignInPolicy.AllowedFirstAuthFactors',
  ['PASSWORD', 'WEB_AUTHN', 'EMAIL_OTP']
);

cfnUserPoolClient.explicitAuthFlows = [
  'ALLOW_REFRESH_TOKEN_AUTH',
  'ALLOW_USER_AUTH'
];

cfnUserPool.addPropertyOverride('WebAuthnRelyingPartyID', 'localhost');
cfnUserPool.addPropertyOverride('WebAuthnUserVerification', 'preferred');

