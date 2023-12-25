import MainTitle from "../main/MainTitle.js"
import React, { useState } from "react";
import "./create_game.css"

const CreateGame = () => {
    let offers = []
    const [offersState, setOffersState] = useState(offers);

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
        const url = document.getElementById("offer_link").value;
        const curr_price = document.getElementById("offer_current_price").value;
        const def_price = document.getElementById("offer_default_price").value;

        // Push'em to the array
        offers.push({label, url, curr_price, def_price})

        // Update state
        setOffersState(offers)
        console.log(offersState) // Срабатывает - массив меняется
    }

    return (
        <div className="create_game_wrapper">
            <MainTitle headers={headers}/>
            <main id="game_creation">
                <h3>Выберите название для игры</h3>
                <input id="game_label" type="text" placeholder="Название игры"/>

                <h3 for="game_cover">Выберите изображение для обложки игры</h3>
                <input type="file" id="game_cover" name="game_cover" accept="image/png, image/jpeg" />
                <img src="" alt="" id="imageDisplay"/>

                <h3 for="game_description">Введите описание для игры</h3>
                <textarea id="game_description" type="text" placeholder="Описание"></textarea>

                <fieldset id="game_genre">
                    <h3>Определите жанр игры</h3>
                
                    <div id="genre_cases">
                    <div>
                    <input type="checkbox" id="genre_action" name="genre" checked />
                    <label for="genre_action">Экшен</label>
                    </div>

                    <div>
                        <input type="checkbox" id="genre_adventure" name="genree" checked />
                        <label for="genre_adventure">Приключение</label>
                    </div>

                    <div>
                        <input type="checkbox" id="genre_rpg" name="genre" checked />
                        <label for="genre_rpg">RPG</label>
                    </div>  

                    <div>
                        <input type="checkbox" id="genre_sim" name="genre" checked />
                        <label for="genre_sim">Симулятор</label>
                    </div>
  
                    <div>
                        <input type="checkbox" id="genre_strategy" name="genre" checked />
                        <label for="genre_strategy">Стратегия</label>
                    </div>
  
                    <div>
                        <input type="checkbox" id="genre_sport" name="genre" checked />
                        <label for="genre_sport">Спорт</label>
                    </div> 

                    <div>
                        <input type="checkbox" id="genre_race" name="genre" checked />
                        <label for="genre_race">Гонки</label>
                    </div>

                    <div>
                        <input type="checkbox" id="genre_casual" name="genre" checked />
                        <label for="genre_casual">Казуальные</label>
                    </div> 
                    </div>
                </fieldset>


            <h3>Предложения</h3>
            <section id="offers">
                {offersState.map((value, index) => {
                    (
                        <div class="offer" key={index}>
                            <div class="offer_left">
                                <span class="offer_label">{value.label}</span>
                                <span class="offer_url">{value.url}</span>
                            </div>
                            <div class="offer_right">
                                <span class="current_price">{value.curr_price}$</span>
                                <span class="default_price">{value.def_price}$</span>
                            </div>
                        </div>
                    )
                })}
            </section>
            <form id="add_offer_section">
                <label for="offer_label">Название сайта</label>
                <input id="offer_label" type="text" placeholder="Название сайта"/>

                <label for="offer_link">Ссылка на предложение</label>
                <input id="offer_link" type="text" placeholder="url предложения"/>

                <label for="offer_current_price">Текущая цена</label>
                <input id="offer_current_price" type="text" placeholder="Текущая цена"/>

                <label for="offer_default_price">Стандартная цена</label>
                <input id="offer_default_price" type="text" placeholder="Стандартная цена"/>

                <button type="submit" class="btn btn-secondary" onClick={updateOffersState}>Добавить предложение</button>
            </form>

            <button id="add_game" class="btn btn-success">Добавить игру</button>
            </main>
        </div>
    );
}

export default CreateGame