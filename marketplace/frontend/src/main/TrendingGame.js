import { useNavigate } from "react-router-dom";

const TrendingGame = ({ gameTitle, gameDescription, gameCover, gameId }) => {
    const navigate = useNavigate()
	const redirectToGamePage = () => {
		navigate({
			pathname: `/game_page/${gameId}`
		})
	}

	return (
		<section className="trending_game" style={{ backgroundImage: `url(${gameCover})` }}>
			<div className="trending_game_info">
				<h3 className="trending_game_name">{gameTitle}</h3>
				<p className="trending_game_description">{gameDescription}</p>
				<button className="trending_game_redirect btn btn-secondary" onClick={redirectToGamePage}> Перейти </button>
			</div>
		</section>
	)
}

export default TrendingGame;