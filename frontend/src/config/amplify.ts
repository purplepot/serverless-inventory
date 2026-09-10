import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID || 'ap-south-1_5ZqL46iYr',
      userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID || '6gesuhbcucqkb59hslt0bdv3a7',
      signUpVerificationMethod: 'code' as const,
      loginWith: {
        email: true,
        username: false,
        phone: false,
      },
    },
  },
};

export function configureAmplify() {
  Amplify.configure(amplifyConfig);
}

export default amplifyConfig;