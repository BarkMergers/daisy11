const tenantId = "3fdf479e-e456-4ae5-9431-657da2d108ec";
const frontEndClientId = "b1799292-e17c-4428-8330-c695d2b35db1";
const backEndClientId = "6be0af57-8832-4ef2-adc4-060e2067bcf6";

export const msalConfig = {


    auth: {
        clientId: frontEndClientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        redirectUri: "https://nice-beach-0b426541e.1.azurestaticapps.net/",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

export const loginRequest = {
    scopes: [
        `api://${backEndClientId}/.default`
        //"User.Read"
    ], // Microsoft Graph scope for profile info
};



//http://localhost:59414/
//https://nice-beach-0b426541e.1.azurestaticapps.net/