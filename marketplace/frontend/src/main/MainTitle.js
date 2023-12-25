const MainTitle = ({headers}) => {
	const headerTitlesUi = headers.map((element) => {
		return <a href={element.link}>{element.title}</a>
	})
	
	return (
		<header className="main_header">
			{headerTitlesUi}
		</header>
	)
}

export default MainTitle;