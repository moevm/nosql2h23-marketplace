import React, { useState, useEffect } from "react"
import "./main.css"
import MainTitle from "./MainTitle.js"
import PopularGames from "./PopularGames.js"
import MainCatalog from "./MainCatalog.js"
import TrendingGame from "./TrendingGame.js"
import { getRandomNumberOfGames, getAllGames, getGameByGenre } from "../GameRequests.js"

const Main = () => {
	const user = localStorage.getItem("user")
	const link_to_user = user ? "/user_page": "/";
	const headers = [
		{key: 0, link: "/main", title: "Главная страница"},
		{key: 3, link: link_to_user, title: "Профиль"},
		{key: 5, link: "/create_game", title: "Создать игру"},
	]

	const mainCatalogFilters = [
		"Экшен", "Приключение", "RPG", "Симуляторы", "Стратегии", "Спорт", "Гонки", "Казуальные", "Все игры"
	]


	const [rendered, initialRender] = useState(false);
	const [trendingGame, setTrendingGame] = useState();
	const [popularGames, setPopularGames] = useState();
	const [catalogGames, setCatalogGames] = useState();
	const [catalogFlag, setCatalogFlag] = useState("Все игры");

	const loadAllData = async () => {
		// Get trending game
		const res_trending = await (await getRandomNumberOfGames(1)).text()
		const res_popular = await (await getRandomNumberOfGames(6)).text()
		const res_catalog = await (await getAllGames()).text()

		setTrendingGame(JSON.parse(res_trending)[0])
		setPopularGames(JSON.parse(res_popular))
		setCatalogGames(JSON.parse(res_catalog))

		initialRender(true)
	}

	useEffect(() => {
		loadAllData()
		return () => {}
	}, [])

	const updateCatalogFlag = async flag => {
		// Nullify data
		setCatalogGames(null)
		setCatalogFlag(flag)

		let res;
		if (flag === "Все игры") {
			res = await (await getAllGames()).text()
		} else {
			res = await (await getGameByGenre(flag)).text()
		}

		setCatalogGames(JSON.parse(res))
	}

	return (
		<div>
			{ rendered ? (
					<div className="main_wrapper">
						<MainTitle headers={headers}/>
						{trendingGame ? <TrendingGame 
							gameTitle={trendingGame.title} 
							gameDescription={trendingGame.description} 
							gameCover={trendingGame.picture_data}
							gameId={trendingGame._id}/>: <p>Загрузка...</p>}		
						<main>
							{popularGames ? <PopularGames games={popularGames}/> : <p>Загрузка...</p>}
							{catalogGames ? <MainCatalog 
								mainCatalogFilters={mainCatalogFilters} 
								games={catalogGames} 
								stateChangeFunction={updateCatalogFlag}
								catalogFlag={catalogFlag}/>: <p>Загрузка...</p> }
						</main>
					</div>) : 
					(<p>Загрузка...</p>)
			}
		</div>
	);
}


export default Main;