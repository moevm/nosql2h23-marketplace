import "./user_page.css"
import MainTitle from "../main/MainTitle.js"
import BoughtGames from "./BoughtGames";
import React from "react";

const UserPage = () => {
    const headers = [
        {link: "#", title: "Главная страница"},
        {link: "#", title: "Поиск игры"},
        {link: "#", title: "Поддержка"},
        {link: "#", title: "Профиль"},
        {link: "#", title: "Корзина"}
    ]
    const userInfo = {
        imgLink: "https://drive.google.com/uc?export=download&id=1sgmE1GwCpijOlv7IIiBwLy27lbUNuGA6",
        name: "Кирилл Казумович",
        email: "dragon_of_dojima@yandex.ru",
        gamesBoughtAmount: 10,
        role: "Администратор",
        registrationDate: "13.01.2023"
    }
    const boughtGames = [
        {
            imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/834530/capsule_616x353.jpg?t=1685702166",
            label: "Yakuza Kiwami",
            content: "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
            purchase_date: "13.10.2023"
        },
        {
            imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/834530/capsule_616x353.jpg?t=1685702166",
            label: "Yakuza Kiwami",
            content: "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
            purchase_date: "13.10.2023"
        },
        {
            imgLink: "https://cdn.akamai.steamstatic.com/steam/apps/834530/capsule_616x353.jpg?t=1685702166",
            label: "Yakuza Kiwami",
            content: "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
            purchase_date: "13.10.2023"
        },
    ]

    return (
        <div className="user_page_wrapper">
            <MainTitle headers={headers}/>
            <UserInfo imgLink={userInfo.imgLink} name={userInfo.name} email={userInfo.email} gamesBoughtAmount={userInfo.gamesBoughtAmount} role={userInfo.role} registrationDate={userInfo.registrationDate} />
            <BoughtGames boughtGames={boughtGames}/>
        </div>
    );
}

const UserInfo = ({imgLink, name, email, gamesBoughtAmount, role, registrationDate}) => {
    const goToAdminPanelButtonProvider = () => {
        if (role === "Администратор") {
            return (
                <button id="go_to_admin_panel" className="btn btn-primary">Перейти в панель администратора</button>
            )
        } else {
            return null;
        }
    }

    return (
        <section id="user_info_section">
            <h1>Информация о пользователе</h1>
            <div className="user_page_divider"></div>
            <div id="user_info_contents">
                <div id="user_info_image_block">
                    <img src={imgLink} alt="avatar" id="user_image_avatar"/>
                    <button id="change_avatar" className="btn btn-primary">
                        Изменить
                    </button>
                </div>
                <div id="user_info_text_block">
                    <div id="user_name">Имя: <b>{name}</b></div>
                    <div id="user_email">Электронная почта: <b>{email}</b></div>
                    <div id="user_games_bought">Куплено игр: <b>{gamesBoughtAmount}</b></div>
                    <div id="user_role">Роль: <b>{role}</b></div>
                    <div id="user_registration_date">Дата регистрации: <b>{registrationDate}</b></div>
                    {goToAdminPanelButtonProvider()}
                </div>
            </div>
        </section>
    )
}

export default UserPage;