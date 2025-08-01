export const URLROOT = import.meta.env.VITE_DAISY_SERVER_ROOT;

export const POST =function(data) {
    return {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    }
}

export const GET = function () {
    return {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    }
}