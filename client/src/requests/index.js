export const postPreferences = async (postBody) => {
    const response = await fetch ('/preferences', {
        method: "post",
        resolveWithFullResponse: true,
        body: JSON.stringify(postBody),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Credentials": true,
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
        }
    })
    return response.json()
}
