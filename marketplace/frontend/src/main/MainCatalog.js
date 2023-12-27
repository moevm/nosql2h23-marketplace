import { useNavigate } from "react-router-dom";

const MainCatalog = ({mainCatalogFilters, games, stateChangeFunction, catalogFlag}) => {
	return (
		<section className="main_catalog">
			<span className="main_catalog_label"> Каталог игр </span>
			<div className="main_catalog_contents">
				<MainCatalogFilters mainCatalogFilters={mainCatalogFilters} stateChangeFunction={stateChangeFunction} catalogFlag={catalogFlag}/>
				<MainCatalogGamesList games={games} />
			</div>
		</section>
	)
}

const MainCatalogFilters = ({mainCatalogFilters, stateChangeFunction, catalogFlag}) => {
	let itemIndex = 1;

	const handleEvent = (event, filter) => {
		if (event.target.checked) {
			stateChangeFunction(filter)
		}
	}

	const filtersUi = mainCatalogFilters.map((filter) => {
		const itemId = "item" + itemIndex.toString()
		itemIndex++
		return (
			<li>
				<input type="radio" id={itemId} name="main_catalog_filter_items" onChange={event => handleEvent(event, filter)} checked={catalogFlag === filter}/>
				<label for={itemId}>{filter}</label>
			</li>
		)
	})

	return (
		<ul className="main_catalog_filter">
			{filtersUi}
		</ul>
	)
}

const MainCatalogGamesList = ({games}) => {
	const gameCards = games.map((game, index) => {
		return (
			<MainCatalogGameCard 
				key={index}
				imgLink={game.picture_data} 
				title={game.title} 
				currentPrice={game.offers[0] ? game.offers[0].current_price: null} 
				oldPrice={game.offers[0] ? game.offers[0].default_price: null} 
				currency={game.offers[0] ? game.offers[0].currency: null}
				gameId={game._id}/>
		)
	})

	return (
		<div className="main_catalog_games_list">
			{gameCards}
		</div>
	)
}

const MainCatalogGameCard = ({ imgLink, title, currentPrice, oldPrice, currency, gameId }) => {
	const navigate = useNavigate();

	const oldPriceUi = () => {
		if (oldPrice != null) {
			return (
				<span className="main_catalog_name_card_old_price">
					${oldPrice}
				</span>
			) 
		} else {
			return null; 
		}
	}

	const redirect = () => {
		navigate({
			pathname: `/game_page/${gameId}`
		})
	}

	return (
		<div className="main_catalog_game_card" onClick={redirect}>
			<img src={imgLink} alt="game_image" className="main_catalog_game_image" />
			<div className="main_catalog_game_card_info">
				<span className="main_catalog_game_card_name">{title}</span>
				<div className="main_catalog_game_card_text">
					<span className="main_catalog_game_card_price">
						${currentPrice}
						{oldPriceUi()}
					</span>
				</div>
			</div>
		</div>
	)
}

export default MainCatalog;