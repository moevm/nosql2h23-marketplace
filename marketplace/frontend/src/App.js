import React from "react"

const App = ({data}) => {
	
  	return (
    	<div className="App">
    		<p>{data}</p>
			<Title data="qwert"/>
    	</div>
  	);
}

const Title = ({data}) => {
	return (<p>123, {data}</p>)
}

export default App;