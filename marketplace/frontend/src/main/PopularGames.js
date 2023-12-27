import { useNavigate } from "react-router-dom"

const PopularGames = ({games}) => {
	const gamesUi = games.map((game, index) => {
		return <PopularGameCard 
			key={index}
			imgLink={game.picture_data} 
			title={game.title} 
			price={game.offers[0] ? game.offers[0].current_price: null} 
			currency={game.offers[0] ? game.offers[0].currency: null} 
			gameId={game._id}
		/>
	})

	return (
			<section className="popular_games">
				<span className="popular_label"> Популярно сейчас </span>
				<div className="popular_games_collection">
					{gamesUi}
				</div>
			</section>
	)
}

const PopularGameCard = ({imgLink, title, price, currency, gameId}) => {
	const navigate = useNavigate();

	const redirect = () => {
		navigate({
			pathname: `/game_page/${gameId}`
		})
	}

	return (
		<div className="popular_game_card" onClick={redirect}>
		<img src={imgLink} alt="popular_game_card_image" className="popular_game_card_image"/>
		<div className="popular_game_card_info">
			<span className="popular_game_card_name">{title}</span>
			<div className="popular_game_card_text">
				<span className="popular_game_card_price">${price}</span>
			</div>
		</div>
	</div>
	)
}

export default PopularGames;