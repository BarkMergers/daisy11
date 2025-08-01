

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