import React from "react"
import "./main.css"
import MainTitle from "./MainTitle.js"
import MainContent from "./MainContent.js"
import TrandingGame from "./TrandingGame.js"

const Main = ({ data }) => {
	const headers = [
		{link: "#", title: "Главная страница"},
		{link: "#", title: "Поиск игры"},
		{link: "#", title: "Поддержка"},
		{link: "#", title: "Профиль"},
		{link: "#", title: "Корзина"}
	]
	const trandingGameTitle = "Counter Strike 2"
	const trandingGameDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis culpa mollitia dolorem fugiat? Ut quis quisquam incidunt deleniti provident eum, culpa placeat dicta officia cupiditate itaque et ducimus consequuntur. Laborum, expedita. Pariatur quasi perferendis hic non ea harum, libero aut ut debitis sequi dolorum amet eum ullam vero? Corporis minima sapiente quod accusamus quam nulla dolores dolore nesciunt esse!'
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

	return (
		<div class="main_wrapper">
			<MainTitle headers={headers}/>
			<TrandingGame gameTitle={trandingGameTitle} gameDescription={trandingGameDescription} />
			<MainContent popularGames={games} mainCatalogFilters={mainCatalogFilters} catalogGames={catalogGames}/>
		</div>
	);
}


export default Main;