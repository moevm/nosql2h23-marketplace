import "./registration.css"
import {useNavigate} from "react-router-dom";
import routerLinks from '../utils/router_links'

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
                    Есть аккаунт? <a href="/">Войдите</a>
                </div>
            </div>
        </div>
    )
}

const onRegFormSubmit = (navigate) => {
    const email = document.getElementById("input_email").value
    const name = document.getElementById("input_name").value
    const password = document.getElementById("input_password").value
    const password_repeat = document.getElementById("input_password_repeat").value

    console.log("submit clicked")

    if (!isValidName(name)) {
        return
    }

    if (!isValidEmail(email)) {
        return
    }

    if (password !== password_repeat || !isValidPassword(password)) {
        return
    }

    // TODO: добавить сохранение данных нового пользователя

    navigate(routerLinks.main)
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