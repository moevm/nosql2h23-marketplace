const TrandingGame = ({ gameTitle, gameDescription }) => {
	return (
		<section class="trending_game">
			<div class="trending_game_info">
				<h3 class="trending_game_name">{gameTitle}</h3>
				<p class="trending_game_description">{gameDescription}</p>
				<button class="trending_game_redirect btn btn-secondary">
					Перейти
				</button>
			</div>
		</section>
	)
}

export default TrandingGame;