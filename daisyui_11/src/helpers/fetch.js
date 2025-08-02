export const URLROOT = import.meta.env.VITE_DAISY_SERVER_ROOT;

export var token = { value: null };


export const POST = function(data) {
    return {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    }
}


export const GET = function () {

    console.log(token.value);

    return {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    }
}