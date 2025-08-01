const DAISY_TENANT_ID = import.meta.env.VITE_DAISY_TENANT_ID; // "3fdf479e-e456-4ae5-9431-657da2d108ec";
const DAISY_FRONTEND_CLIENT_ID = import.meta.env.VITE_DAISY_FRONTEND_CLIENT_ID; // "b1799292-e17c-4428-8330-c695d2b35db1";
const DAISY_BACKEND_CLIENT_ID = import.meta.env.VITE_DAISY_BACKEND_CLIENT_ID; // "6be0af57-8832-4ef2-adc4-060e2067bcf6";

export const msalConfig = {

    auth: {
        clientId: DAISY_FRONTEND_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${DAISY_TENANT_ID}`,
        redirectUri: "http://localhost:59414/",
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