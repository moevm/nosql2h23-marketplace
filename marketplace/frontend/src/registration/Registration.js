import "./registration.css"
import {useNavigate} from "react-router-dom";
import routerLinks from '../utils/router_links'
import { addUser } from "../UserRequests";

const Registration = () => {
    const navigate = useNavigate()
    const onSubmit = () => {
        onRegFormSubmit(navigate)
    }

    return (
        <div className="registration_wrapper">
            <h1>AGPlay</h1>
            <div className="registration_block">
                <h3>Регистрация</h3>
                <form action="" className="registration_form">
                    <input id="input_name" className="input-group input-group-sm mb-3" type="text" placeholder="Name"/>
                    <input id="input_email" className="input-group input-group-sm mb-3" type="email" placeholder="Email"/>
                    <input id="input_password" className="input-group input-group-sm mb-3" type="password"
                           placeholder="Password"/>
                    <input id="input_password_repeat" className="input-group input-group-sm mb-3" type="password"
                           placeholder="Repeat password"/>
                    <button onClick={onSubmit} type="submit" className="btn btn-primary">Войти</button>
                </form>
                <div className="registration_divider"></div>
                <div>
                    Есть аккаунт? <a href={routerLinks.auth}>Войдите</a>
                </div>
            </div>
        </div>
    )
}

const onRegFormSubmit = async (navigate) => {
    const email = document.getElementById("input_email").value
    const name = document.getElementById("input_name").value
    const password = document.getElementById("input_password").value
    const password_repeat = document.getElementById("input_password_repeat").value

    console.log("submit clicked")

    if (!isValidName(name)) {
        alert("Неправильное имя")
        return
    }

    if (!isValidEmail(email)) {
        alert("Неправильная почта")
        return
    }

    if (password !== password_repeat || !isValidPassword(password)) {
        alert("Неправильный пароль")
        return
    }

    const user = {
        name,
        email,
        password,
        login: email,
        role: "user",
        is_banned: false,
        avatar_data: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
    }

    let res = await addUser(email, password);
    if (res["status"] === 200) {
        navigate({
            pathname: routerLinks.main,
            search: "1234" 
        })

        console.log(res.body)

        // Сохранить данные в localStorage
        
    } else {
        alert(res)
    }
}

const isValidName = (name) => {
    return name === "admin" || (name.length >= 5)
}

const isValidEmail = (email) => {
    return email === "admin" || (email.length >= 5 && email.indexOf('@') !== -1)
}

const isValidPassword = (password) => {
    return password === "admin" || password.length >= 8
}

export default Registration;