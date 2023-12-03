import "./user_page.css"
import React from "react";

const BoughtGameItem = ({imgLink, label, content, purchase_date}) => {
    return (
        <div className="bought_game_item">
            <img src={imgLink} alt="game_icon" className="bought_game_image"/>
            <div className="bought_game_text_block">
                <div className="bought_game_label">{label}</div>
                <div className="bought_game_content">Ключ: {content}</div>
                <div className="bought_game_purchase_date">Куплено {purchase_date}</div>
            </div>
        </div>
    )
}

const BoughtGamesList = ({boughtGames}) => {
    const boughtGamesItem = boughtGames.map((game) => {
        return <BoughtGameItem imgLink={game.imgLink} label={game.label} content={game.content} purchase_date={game.purchase_date} />
    })

    return (
        <div id="bought_games_list">
            {boughtGamesItem}
        </div>
    )
}

const BoughtGames = ({boughtGames}) => {
    return (
        <section id="bought_games_section">
            <h2>Купленные игры</h2>
            <div className="user_page_divider"></div>
            <BoughtGamesList boughtGames={boughtGames}/>
        </section>
    )
}

export default BoughtGames;