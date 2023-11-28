
const MainCatalog = ({mainCatalogFilters, games}) => {
	return (
		<section className="main_catalog">
			<span className="main_catalog_label"> Каталог игр </span>
			<div className="main_catalog_contents">
				<MainCatalogFilters mainCatalogFilters={mainCatalogFilters} />
				<MainCatalogGamesList games={games} />
			</div>
		</section>
	)
}

const MainCatalogFilters = ({mainCatalogFilters}) => {
	let itemIndex = 1;
	const filtersUi = mainCatalogFilters.map((filter) => {
		const itemId = "item" + itemIndex.toString()
		itemIndex++
		return (
			<li>
				<input type="radio" id={itemId}  name="main_catalog_filter_items" />
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
	const gameCards = games.map((game) => {
		return (
			<MainCatalogGameCard imgLink={game.imgLink} title={game.title} currentPrice={game.currentPrice} oldPrice={game.oldPrice} currency={game.currency}/>
		)
	})
	return (
		<div className="main_catalog_games_list">
			{gameCards}
		</div>
	)
}

const MainCatalogGameCard = ({ imgLink, title, currentPrice, oldPrice, currency }) => {
	const oldPriceUi = () => {
		if (oldPrice != null) {
			return (
				<span className="main_catalog_name_card_old_price">
					{currency}{oldPrice}
				</span>
			) 
		} else {
			return null; 
		}
	}

	return (
		<div className="main_catalog_game_card">
			<img src={imgLink} alt="game_image" className="main_catalog_game_image" />
			<div className="main_catalog_game_card_info">
				<span className="main_catalog_game_card_name">{title}</span>
				<div className="main_catalog_game_card_text">
					<span className="main_catalog_game_card_price">
						{currency}{currentPrice}
						{oldPriceUi()}
					</span>
				</div>
			</div>
		</div>
	)
}

export default MainCatalog;