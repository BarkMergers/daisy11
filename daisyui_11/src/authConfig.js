export const msalConfig = {
    auth: {
        clientId: "6be0af57-8832-4ef2-adc4-060e2067bcf6",
        authority: "https://login.microsoftonline.com/6d52e229-7b09-4772-885e-edd85950a304",
        redirectUri: "http://localhost:59414/",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

export const loginRequest = {
    scopes: [
        "api://6be0af57-8832-4ef2-adc4-060e2067bcf6/.default"    //,
        //"User.Read"
    ], // Microsoft Graph scope for profile info
};



//http://localhost:59414/
//https://nice-beach-0b426541e.1.azurestaticapps.net/