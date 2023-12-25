import "./user_page.css"
import MainTitle from "../main/MainTitle.js"
import BoughtGames from "./BoughtGames";
import React from "react";
import {useNavigate} from "react-router-dom";
import routerLinks from '../utils/router_links'

const UserPage = () => {
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem("user"))
	const link_to_user = userData ? "#": "/";
	const headers = [
		{key: 0, link: "#", title: "Главная страница"},
		{key: 1, link: "#", title: "Поиск игры"},
		{key: 2, link: "#", title: "Поддержка"},
		{key: 3, link: link_to_user, title: "Профиль"},
		{key: 4, link: "#", title: "Корзина"},
		{key: 5, link: "#", title: "Создать игру"},
	]

    if (userData) {
        const userInfo = {
            imgLink: userData.avatar_data,
            name: userData.name,
            email: userData.email,
            gamesBoughtAmount: userData.purchased_games.length,
            role: userData.role,
            registrationDate: userData.registration_date
        }
        const boughtGames = userData.purchased_games
    
        return (
            <div className="user_page_wrapper">
                <MainTitle headers={headers}/>
                <UserInfo imgLink={userInfo.imgLink} name={userInfo.name} email={userInfo.email} gamesBoughtAmount={userInfo.gamesBoughtAmount} role={userInfo.role} registrationDate={userInfo.registrationDate} />
                <BoughtGames boughtGames={boughtGames}/>
            </div>
        );
    } else {
        navigate({
            pathname: routerLinks.auth
        })
    }
    
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