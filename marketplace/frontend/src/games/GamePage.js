import "./game_page.css"
import MainTitle from "../main/MainTitle.js"
import React from "react";

const GamePage = () => {
    const user = localStorage.getItem("user")
	const link_to_user = user ? "/user_page": "/";
	const headers = [
		{key: 0, link: "/main", title: "Главная страница"},
		{key: 1, link: "#", title: "Поиск игры"},
		{key: 2, link: "#", title: "Поддержка"},
		{key: 3, link: link_to_user, title: "Профиль"},
		{key: 4, link: "#", title: "Корзина"},
		{key: 5, link: "/create_game", title: "Создать игру"},
	]

    const gamePageInfo = {
        viewedAmount: 420,
        clickedAmount: 40,
        commentedAmount: 4
    }

    const gameMainInfo = {
        gameTitle: "Yakuza 0",
        imgLink: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/yakuza-0/4/45/Yakuza_0_.jpg?width=1280"
    }

    const gameDescription = {
        title: "Yakuza 0",
        description: "это игра в жанре экшен-приключения, разработанная и изданная компанией Sega. Она является предысторией серии Yakuza и разворачивается в конце 1980-х - начале 1990-х годов в вымышленном открытом мире Камурочо и Сотенбори, основанных на реальных местах в Токио и Осаке.\n" +
            "Игра рассказывает историю двух главных героев, Казумы Киру и Горо Маджимы, погружая игроков в преступный мир Японии. Игроки могут участвовать в рукопашном бою, исследовать оживленные города и участвовать в различных побочных активностях, таких как караоке, танцы и мини-игры.\n" +
            "Благодаря захватывающему сюжету, интенсивным боям и захватывающему открытому миру Yakuza 0 получила признание критиков за свою сюжетную линию и игровые механики. Она стала одной из самых популярных игр в серии Yakuza и была отмечена за аутентичное отображение японской культуры и общества во время экономического бума.",
        genres: [
            "Экшен", "Сюжет"
        ]
    }

    const gameOffers = [
        {
            offerLabel: "AGPlay",
            currentPrice: 499,
            defaultPrice: 1500,
            currency: "руб."
        },
        {
            offerLabel: "AGPlay",
            currentPrice: 499,
            defaultPrice: 1500,
            currency: "руб."
        },
        {
            offerLabel: "AGPlay",
            currentPrice: 499,
            defaultPrice: 1500,
            currency: "руб."
        },
    ]

    const comments = [
        {
            userImgLink: "https://sun9-1.userapi.com/impg/uaxJmjCLVDyC8xFr0YuPSDOBaBP407iVTisVnQ/kEM5aoNdjdY.jpg?size=1440x1432&quality=95&sign=459be18ad34b12714c2f9ae22d9aa503&type=album",
            userName: "Deimos",
            userCommentDate: "13.01.2023",
            commentRatingTitle: "Крутой сюжет!",
            commentText: "Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую!"
        },
        {
            userImgLink: "https://sun9-1.userapi.com/impg/uaxJmjCLVDyC8xFr0YuPSDOBaBP407iVTisVnQ/kEM5aoNdjdY.jpg?size=1440x1432&quality=95&sign=459be18ad34b12714c2f9ae22d9aa503&type=album",
            userName: "Deimos",
            userCommentDate: "13.01.2023",
            commentRatingTitle: "Крутой сюжет!",
            commentText: "Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую!"
        },
        {
            userImgLink: "https://sun9-1.userapi.com/impg/uaxJmjCLVDyC8xFr0YuPSDOBaBP407iVTisVnQ/kEM5aoNdjdY.jpg?size=1440x1432&quality=95&sign=459be18ad34b12714c2f9ae22d9aa503&type=album",
            userName: "Deimos",
            userCommentDate: "13.01.2023",
            commentRatingTitle: "Крутой сюжет!",
            commentText: "Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую! Пацаны, го на старую!"
        }
    ]

    return (
        <div className="game_page_wrapper">
            <MainTitle headers={headers}/>
            <GamePageInfo viewedAmount={gamePageInfo.viewedAmount} clickedAmount={gamePageInfo.clickedAmount}
                          commentedAmount={gamePageInfo.commentedAmount}/>
            <GamePageImage gameTitle={gameMainInfo.gameTitle} imgLink={gameMainInfo.imgLink}/>
            <GamePageMain gameDescription={gameDescription} gameOffers={gameOffers} comments={comments}/>
        </div>
    );
}

const GamePageInfo = ({viewedAmount, clickedAmount, commentedAmount}) => {
    return (
        <section id="game_page_info">
            <h2>Информация и управление <button className="game_page_info_delete_btn btn btn-danger">Удалить
                игру</button></h2>
            <div className="game_page_divider"></div>
            <div className="game_page_info_panel">
                <div className="game_page_info_charts">
                    <div className="game_page_info_viewed">
                        Посмотрели сегодня: {viewedAmount} чел.
                    </div>
                    <div className="game_page_info_clicked">
                        Кликнули на предложение: {clickedAmount} чел.
                    </div>
                    <div className="game_page_info_commented">
                        Оставили комментарии: {commentedAmount} чел.
                    </div>
                </div>
            </div>
        </section>
    )
}

const GamePageImage = ({gameTitle, imgLink}) => {
    return (
        <section id="game_image_section">
            <h1>{gameTitle}</h1>
            <img src={imgLink} alt=""/>
        </section>
    )
}

const GamePageMain = ({gameDescription, gameOffers, comments}) => {
    return (
        <main id="game_page_main">
            <GamePageDescriptionSection title={gameDescription.title} description={gameDescription.description}
                                        genres={gameDescription.genres}/>
            <GamePageOffersSection gameOffers={gameOffers}/>
            <GamePageCommentsSection comments={comments}/>
        </main>
    )
}

const GamePageDescriptionSection = ({title, description, genres}) => {
    const genresStr = genres.join(", ") + "."
    return (<section id="game_page_description_section">
        <h2>Описание</h2>
        <div className="game_page_divider"></div>
        <div id="game_page_description">
            <b>{title}</b> - {description}
        </div>
        <div id="game_page_genres">
            <b>Жанр игры</b>: {genresStr}
        </div>
        <button className="game_page_edit_info btn btn-primary">Редактировать информацию об игре</button>
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
        return <GamePageOffer offerLabel={element.offerLabel} currentPrice={element.currentPrice}
                              defaultPrice={element.defaultPrice} currency={element.currency}/>
    })

    return (
        <section id="game_page_offers_section">
            <h2>Предложения <button id="game_page_offer_add_offer" className="btn btn-primary">+ Добавить
                предложение</button></h2>
            <div className="game_page_divider"></div>
            <div id="game_page_offers_list">
                {headerTitlesUi}
            </div>
        </section>
    )
}

const GamePageComment = ({userImgLink, userName, userCommentDate, commentRatingTitle, commentText}) => {
    return (
        <div className="game_page_comment">
            <div className="game_page_comment_user_info">
                <img
                    src={userImgLink}
                    alt="" className="game_page_comment_user_avatar"/>
                <div className="game_page_comment_user_name">{userName}</div>
                <div className="game_page_comment_user_date">{userCommentDate}</div>
            </div>
            <div className="game_page_comment_content">
                <div className="game_page_comment_rating positive">{commentRatingTitle}</div>
                <div className="game_page_comment_text">{commentText}</div>
                <div className="game_page_buttons">
                    <button className="delete-comment btn btn-danger">Удалить</button>
                    <button className="ban-comment btn btn-warning">Бан</button>
                    <button className="report-comment btn btn-secondary">Пожаловаться</button>
                </div>
            </div>
        </div>
    )
}

const GamePageCommentsSection = ({comments}) => {
    const headerTitlesUi = comments.map((element) => {
        return <GamePageComment userImgLink={element.userImgLink} userName={element.userName}
                                userCommentDate={element.userCommentDate}
                                commentRatingTitle={element.commentRatingTitle} commentText={element.commentText}/>
    })
    return (
        <section id="game_page_comments_section">
            <h2>Комментарии <button className="btn btn-primary"> + Написать комментарий</button></h2>
            <div className="game_page_divider"></div>
            <div id="game_page_comments_list">
                {headerTitlesUi}
            </div>
        </section>
    )
}

export default GamePage;