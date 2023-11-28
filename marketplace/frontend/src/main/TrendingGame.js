const TrendingGame = ({ gameTitle, gameDescription }) => {
	return (
		<section className="trending_game">
			<div className="trending_game_info">
				<h3 className="trending_game_name">{gameTitle}</h3>
				<p className="trending_game_description">{gameDescription}</p>
				<button className="trending_game_redirect btn btn-secondary">
					Перейти
				</button>
			</div>
		</section>
	)
}

export default TrendingGame;