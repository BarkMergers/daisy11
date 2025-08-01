

export const POST =function(data) {

    const token = sessionStorage.getItem("token");

    return {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}


export const GET = function () {

    const token = sessionStorage.getItem("token");

    return {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}