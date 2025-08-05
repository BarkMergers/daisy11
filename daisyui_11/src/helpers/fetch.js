const URLROOT = import.meta.env.VITE_DAISY_SERVER_ROOT;

export const POST = function(data) {
    return {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: "include"
    }
}

export const GET = function () {
    return {
        method: 'GET',
        credentials: "include"
    }
}

export const SafeFetchJson = async function (url, data) {
    let response = await SafeFetch(url, data);
    if (response != null) {
        return await response.json();
    }
}

export const SafeFetch = async function (url, data) {

    let response;
    let errorText;
    try {
        response = await fetch(URLROOT + url, data);
        if (!response.ok) {
            errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        return response;
    }
    catch (ex) {
        switch (response == null ? null : response.status) {
            case 406:
                {
                    alert(ex + ": " + url);
                    return null;
                }

            default:
                {
                    alert(ex + ": " + url);
                    return null;
                }
        }
    }
}