import React, { useState, useEffect } from "react"
import "./main.css"
import MainTitle from "./MainTitle.js"
import MainContent from "./MainContent.js"
import TrendingGame from "./TrendingGame.js"

const Main = () => {
	const user = localStorage.getItem("user")
	const link_to_user = user ? "/user_page": "/";
	const headers = [
		{key: 0, link: "#", title: "Главная страница"},
		{key: 1, link: "#", title: "Поиск игры"},
		{key: 2, link: "#", title: "Поддержка"},
		{key: 3, link: link_to_user, title: "Профиль"},
		{key: 4, link: "#", title: "Корзина"},
		{key: 5, link: "#", title: "Создать игру"},
	]

	const trendingGameTitle = "Counter Strike 2"
	const trendingGameDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis culpa mollitia dolorem fugiat? Ut quis quisquam incidunt deleniti provident eum, culpa placeat dicta officia cupiditate itaque et ducimus consequuntur. Laborum, expedita. Pariatur quasi perferendis hic non ea harum, libero aut ut debitis sequi dolorum amet eum ullam vero? Corporis minima sapiente quod accusamus quam nulla dolores dolore nesciunt esse!'
	const games =  [
			{
				imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267",
				title: "Sekiro: Shadows Die Twice",
				price: "100",
				currency: "$"
			},
			{
				imgLink: "https://www.siliconera.com/wp-content/uploads/2022/02/Elden-Ring-Review.jpg?fit=700%2C394",
				title: "Elden Ring",
				price: "100",
				currency: "$"
			},
			{
				imgLink: "https://gaming-cdn.com/images/products/8855/616x353/lies-of-p-pc-game-steam-cover.jpg?v=1695052146",
				title: "Lies of P",
				price: "100",
				currency: "$"
			},
			{
				imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/638970/capsule_616x353.jpg?t=1685702171",
				title: "Yakuza 0",
				price: "100",
				currency: "$"
			},
			{
				imgLink: "https://blog.playstation.com/tachyon/2023/02/f321c065cf3f405b6d0ac06fd5a550d6a95b5a5e-scaled.jpg?resize=1088%2C612&crop_strategy=smart",
				title: "Baldur's Gate 3",
				price: "100",
				currency: "$"
			},
			{
				imgLink: "https://i.ytimg.com/vi/n2Q3YudILvE/maxresdefault.jpg",
				title: "Marvel's Spider Man",
				price: "100",
				currency: "$"
			},
		]
	const mainCatalogFilters = [
		"Популярное", "Скидки", "Экшен", "Приключение", "RPG", "Симуляторы", "Стратегии", "Спорт", "Гонки", "Казуальные", "Все игры"
	]
	const catalogGames = [
		{
			imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267",
			title: "Sekiro: Shadows Die Twice",
			currentPrice: "100",
			oldPrice: "200",
			currency: "$"
		},
		{
			imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267",
			title: "Sekiro: Shadows Die Twice",
			currentPrice: "100",
			oldPrice: null,
			currency: "$"
		},
		{
			imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267",
			title: "Sekiro: Shadows Die Twice",
			currentPrice: "100",
			oldPrice: "200",
			currency: "$"
		},
	]

	const [draw, setDraw] = useState(false);
	useEffect(() => {
		setTimeout(() => setDraw(true), 5000)
	}, []); 

	return (
		<div>
			{ draw ? (
					<div className="main_wrapper">
					<MainTitle headers={headers}/>
					<TrendingGame gameTitle={trendingGameTitle} gameDescription={trendingGameDescription} />
					<MainContent popularGames={games} mainCatalogFilters={mainCatalogFilters} catalogGames={catalogGames}/>
					</div>) : 
					(<p>Загрузка...</p>)
			}
		</div>
	);
}


export default Main;