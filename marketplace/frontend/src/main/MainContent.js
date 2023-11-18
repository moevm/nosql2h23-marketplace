import MainCatalog from "./MainCatalog.js"
import PopularGames from "./PopularGames.js"

const MainContent = ({popularGames, mainCatalogFilters, catalogGames}) => {
	return (
		<main>
			<PopularGames games={popularGames}/>
			<MainCatalog mainCatalogFilters={mainCatalogFilters} games={catalogGames}/>
		</main>
	)
}

export default MainContent;