const rootUrl = "http://localhost:8080/"
const userRootUrl = "users/"

async function getAllUsers() {
    const response = await fetch(rootUrl + userRootUrl + "all", {
        method: "GET", 
    });
    return await response.json();
}

async function getUserById(id) {
    const response = await fetch(rootUrl + userRootUrl + "id/" + id, {
        method: "GET", 
    });
    return await response.json();
}

async function getUserByLoginPassword(login, password) {
    const response = await fetch(rootUrl + userRootUrl + "login_password/" + login + "/" + password , {
        method: "GET", 
    });
    return await response.json();
}

async function addUser(user) {
    const response = await fetch(rootUrl + userRootUrl + "add", {
        headers: {
            "Content-Type": "application/json",
          },
        method: "POST", 
        body: JSON.stringify(user)
    });
    return await response.json();
}

