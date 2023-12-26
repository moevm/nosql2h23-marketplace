import MainTitle from "../main/MainTitle.js"
import React, { useState } from "react";
import "./create_game.css"
import {addGame} from "../GameRequests.js"

const CreateGame = () => {
    const [offers, setOffers] = useState([]);

    const user = localStorage.getItem("user")
	const link_to_user = user ? "/user_page": "/";
	const headers = [
		{key: 0, link: "/main", title: "Главная страница"},
		{key: 1, link: "#", title: "Поиск игры"},
		{key: 2, link: "#", title: "Поддержка"},
		{key: 3, link: link_to_user, title: "Профиль"},
		{key: 4, link: "#", title: "Корзина"},
		{key: 5, link: "/create_game", title: "Создать игру"},
	]

    const updateOffersState = event => {
        event.preventDefault()

        // Get all 4 variables
        const label = document.getElementById("offer_label").value;
        const purchase_url = document.getElementById("offer_link").value;
        const current_price = Number(document.getElementById("offer_current_price").value);
        const default_price = Number(document.getElementById("offer_default_price").value);
        const currency = "RUB";
        const is_foreign_market = true;

        // Update state
        setOffers([...offers, {label, purchase_url, current_price, default_price, currency, is_foreign_market}])
    }

    const createGame = async event => {
        event.preventDefault()

        // Title
        const title = document.getElementById("game_label").value;
        if (!title) alert("Выберите название игры!")

        // Image reading
        const picture_data = document.getElementById("game_cover").value

        // Game description
        const description = document.getElementById("game_description").value;
        if (!description) alert("Введите описание игры!")

        // Game genre
        const genre = document.getElementById("game_genre").value;
        if (!genre) alert("Введите описание игры!")

        // Comments
        const comments = []

        // Game object initialization 
        const game = {
            title,
            description,
            picture_data,
            genre,
            offers,
            comments
        }

        const res = await addGame(game);
        alert(res.statusText)
    }
    
    return (
        <div className="create_game_wrapper">
            <MainTitle headers={headers}/>
            <main id="game_creation">
                <h3>Выберите название для игры</h3>
                <input id="game_label" type="text" placeholder="Название игры"/>

                <h3 for="game_cover">Выберите изображение для обложки игры</h3>
                <input type="text" id="game_cover" name="game_cover" placeholder="URL картинки" onChange={
                    event => {
                        document.getElementById("imageDisplay").src = event.target.value
                    }  
                }/>
                <img src="" alt="" id="imageDisplay"/>

                <h3 for="game_description">Введите описание для игры</h3>
                <textarea id="game_description" type="text" placeholder="Описание"></textarea>

                <h3 for="game_genre">Введите жанр игры</h3>
                <input id="game_genre" type="text" placeholder="Жанр"></input>

            <h3>Предложения</h3>
            <section id="offers">
                {offers.map((value, index) => {
                    return (
                        <div class="offer" key={index}>
                            <div class="offer_left">
                                <span class="offer_label">{value.label}</span>
                                <span class="offer_url">{value.purchase_url}</span>
                            </div>
                            <div class="offer_right">
                                <span class="current_price">{value.current_price}$</span>
                                <span class="default_price">{value.default_price}$</span>
                            </div>
                        </div>
                    )
                })}
            </section>
            <form id="add_offer_section">
                <label for="offer_label">Название сайта</label>
                <input id="offer_label" type="text" placeholder="Название сайта"/>

                <label for="offer_link">Ссылка на предложение</label>
                <input id="offer_link" type="text" placeholder="URL предложения"/>

                <label for="offer_current_price">Текущая цена</label>
                <input id="offer_current_price" type="text" placeholder="Текущая цена"/>

                <label for="offer_default_price">Стандартная цена</label>
                <input id="offer_default_price" type="text" placeholder="Стандартная цена"/>

                <button type="submit" class="btn btn-secondary" onClick={updateOffersState}>Добавить предложение</button>
            </form>

            <button id="add_game" class="btn btn-success" onClick={createGame}>Добавить игру</button>
            </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </div>
    );
}

export default CreateGame