export const msalConfig = {
    auth: {
        clientId: "5298233e-f1f9-4b83-871f-72ca0b090f13",
        authority: "https://login.microsoftonline.com/6d52e229-7b09-4772-885e-edd85950a304",
        redirectUri: "http://localhost:59414/ ",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

export const loginRequest = {
    scopes: ["User.Read"], // Microsoft Graph scope for profile info
};