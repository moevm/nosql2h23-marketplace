
const PopularGames = ({games}) => {
	const gamesUi = games.map((game) => {
		return <PopularGameCard imgLink={game.imgLink} title={game.title} price={game.price} currency={game.currency} />
	})

	return (
			<section class="popular_games">
				<span class="popular_label"> Популярно сейчас </span>
				<div class="popular_games_collection">
					{gamesUi}
				</div>
			</section>
	)
}

const PopularGameCard = ({imgLink, title, price, currency}) => {
	return (
		<div class="popular_game_card">
		<img src={imgLink} alt="popular_game_card_image" class="popular_game_card_image"/>
		<div class="popular_game_card_info">
			<span class="popular_game_card_name">{title}</span>
			<div class="popular_game_card_text">
				<span class="popular_game_card_price">{currency}{price}</span>
			</div>
		</div>
	</div>
	)
}

export default PopularGames;