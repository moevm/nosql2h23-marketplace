const rootUrl = "http://localhost:8080/"
const gameRootUrl = "games/"

async function getGameById(id) {
    const response = await fetch(rootUrl + gameRootUrl + "id/" + id, {
        method: "GET",
    });
    return await response.json();
}

async function getGameByGenre(genre) {
    const response = await fetch(rootUrl + gameRootUrl + "genre/" + genre, {
        method: "GET",
    });
    return await response.json();
}

async function getRandomNumberOfGames(number) {
    const response = await fetch(rootUrl + gameRootUrl + "random/" + number, {
        method: "GET",
    });
    return await response.json();
}

async function getAllGames() {
    const response = await fetch(rootUrl + gameRootUrl + "all", {
        method: "GET",
    });
    return await response.json();
}

async function addGame(game) {
    const response = await fetch(rootUrl + gameRootUrl + "add", {
        method: "POST",
        body: JSON.stringify(game), 
    });
    return await response.json();
}