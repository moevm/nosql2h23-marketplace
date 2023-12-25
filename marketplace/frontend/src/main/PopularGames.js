const PopularGames = ({games}) => {
	const gamesUi = games.map((game) => {
		return <PopularGameCard imgLink={game.imgLink} title={game.title} price={game.price} currency={game.currency} />
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

const PopularGameCard = ({imgLink, title, price, currency}) => {
	return (
		<div className="popular_game_card">
		<img src={imgLink} alt="popular_game_card_image" className="popular_game_card_image"/>
		<div className="popular_game_card_info">
			<span className="popular_game_card_name">{title}</span>
			<div className="popular_game_card_text">
				<span className="popular_game_card_price">{currency}{price}</span>
			</div>
		</div>
	</div>
	)
}

export default PopularGames;