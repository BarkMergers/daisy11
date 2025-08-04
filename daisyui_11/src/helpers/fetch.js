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

export const SafeFetch = async function (url, data) {

    let response;
    try {
        response = await fetch(URLROOT + url, data);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        return response;
    }
    catch (ex) {
        switch (response == null ? null : response.status) {
            case 406:
                {
                    alert(ex);
                    return;
                }

            default:
                {
                    alert(ex);
                    return;
                }
        }
    }
}