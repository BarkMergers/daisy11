export const URLROOT = import.meta.env.VITE_DAISY_SERVER_ROOT;



export const POST = function(data) {

    const token = sessionStorage.getItem("token");
    console.log(token);


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
    console.log(token);

    return {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}