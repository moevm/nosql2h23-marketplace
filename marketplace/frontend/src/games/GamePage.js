import "./game_page.css"
import MainTitle from "../main/MainTitle.js"
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getGameById } from "../GameRequests.js";

const GamePage = () => {
    const { id } = useParams();
    const [game_data, setGameData] = useState(null);

    const user = localStorage.getItem("user")
	const link_to_user = user ? "/user_page": "/";
	const headers = [
		{key: 0, link: "/main", title: "Главная страница"},
		{key: 3, link: link_to_user, title: "Профиль"},
		{key: 5, link: "/create_game", title: "Создать игру"},
	]

    useEffect(() => {
        const fetchData = async () => {
            let game = await getGameById(id);
            game = await game.json()
            setGameData(game)
        }

        fetchData()
    }, [id])

    return (
        <div>
            {
            game_data ? 
            (<div className="game_page_wrapper">
                <MainTitle headers={headers}/>
                <GamePageImage gameTitle={game_data.title} imgLink={game_data.picture_data}/>
                <GamePageMain gameTitle={game_data.title}gameDescription={game_data.description} gameOffers={game_data.offers} gameGenre={game_data.genre}/> 
            </div>) : <p>Загрузка...</p>
            }
        </div>
        
    );
}

const GamePageImage = ({gameTitle, imgLink}) => {
    return (
        <section id="game_image_section" style={{ backgroundImage: `url(${imgLink})` }}>
            <h1>{gameTitle}</h1>
            <img src={imgLink} alt=""/>
        </section>
    )
}

const GamePageMain = ({gameTitle, gameDescription, gameOffers, gameGenre}) => {
    return (
        <main id="game_page_main">
            <GamePageDescriptionSection title={gameTitle} description={gameDescription}
                                        genre={gameGenre}/>
            <GamePageOffersSection gameOffers={gameOffers}/>
            {/* <GamePageCommentsSection comments={comments}/> */}
        </main>
    )
}

const GamePageDescriptionSection = ({title, description, genre}) => {
    return (<section id="game_page_description_section">
        <h2>Описание</h2>
        <div className="game_page_divider"></div>
        <div id="game_page_description">
            <b>{title}</b> - {description}
        </div>
        <div id="game_page_genres">
            <b>Жанр игры</b>: {genre}
        </div>
    </section>)
}

const GamePageOffer = ({offerLabel, currentPrice, defaultPrice, currency}) => {
    return (
        <div className="game_page_offer">
            <div className="game_page_offer_label">{offerLabel}</div>
            <div className="game_page_offer_prices">
                <div className="game_page_offer_current_price">{currentPrice} {currency}</div>
                <div className="game_page_offer_default_price">{defaultPrice} {currency}</div>
            </div>
        </div>
    )
}

const GamePageOffersSection = ({gameOffers}) => {
    const headerTitlesUi = gameOffers.map((element) => {
        return <GamePageOffer offerLabel={element.label} currentPrice={element.current_price}
                              defaultPrice={element.default_price} currency={element.currency}/>
    })

    return (
        <section id="game_page_offers_section">
            <h2>Предложения </h2>
            <div className="game_page_divider"></div>
            <div id="game_page_offers_list">
                {headerTitlesUi}
            </div>
        </section>
    )
}

export default GamePage;