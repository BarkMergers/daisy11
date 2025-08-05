const DAISY_TENANT_ID = import.meta.env.VITE_DAISY_TENANT_ID; 
const DAISY_FRONTEND_CLIENT_ID = import.meta.env.VITE_DAISY_FRONTEND_CLIENT_ID;
const DAISY_BACKEND_CLIENT_ID = import.meta.env.VITE_DAISY_BACKEND_CLIENT_ID;
const DAISY_REDIRECT_URI = import.meta.env.VITE_DAISY_REDIRECT_URI;

export const msalConfig = {

    auth: {
        clientId: DAISY_FRONTEND_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${DAISY_TENANT_ID}`,
        redirectUri: window.location.origin, // DAISY_REDIRECT_URI,
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

export const loginRequest = {
    scopes: [
        `api://${DAISY_BACKEND_CLIENT_ID}/.default`
        //"User.Read"
    ], // Microsoft Graph scope for profile info
};



//http://localhost:59414/
//https://nice-beach-0b426541e.1.azurestaticapps.net/