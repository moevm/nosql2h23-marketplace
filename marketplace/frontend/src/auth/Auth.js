import "./auth.css"
import {useNavigate} from "react-router-dom";
import routerLinks from '../utils/router_links'
import { getUserByLoginPassword } from "../UserRequests"; 

const Auth = () => {
    const navigate = useNavigate()
    const onSubmit = e => {
        e.preventDefault();
        onAuthFormSubmit(navigate)
    }

    return (
        <div className="auth_wrapper">
            <h1>AGPlay</h1>
            <div className="auth_block">
                <h3>Авторизация</h3>
                <form className="auth_form">
                    <input id="input_email" name="input_email" className="input-group input-group-sm mb-3" type="email"
                           placeholder="Email"/>
                    <input id="input_password" name="input_password" className="input-group input-group-sm mb-3"
                           type="password" placeholder="Password"/>
                    <button onClick={onSubmit} type="submit" className="btn btn-primary">Войти</button>
                </form>
                <div className="auth_divider"></div>
                <div>
                    Новичок? <a href={routerLinks.registration}> Зарегистрируйтесь</a>
                </div>
            </div>
        </div>
    )
}

const onAuthFormSubmit = async (navigate) => {
    const email = document.getElementById("input_email").value
    const password = document.getElementById("input_password").value
    console.log("submit clicked")

    if (!isValidEmail(email)) {
        alert("Неправильная почта")
        return
    }

    if (!isValidPassword(password)) {
        alert("Неправильный пароль")
        return
    }

    let res = await getUserByLoginPassword(email, String(password));
    console.log(res.status)

    if (res["status"] === 200) {
        const data = await res.json()
        navigate({
            pathname: routerLinks.main,
            //search: "1234" 
        })

        localStorage.setItem('user', JSON.stringify(data[0]));
        console.log(localStorage.getItem('user'));
    } else {
        alert(res["status"])
    }
}

const isValidEmail = (email) => {
    return email === "admin" || (email.length >= 5 && email.indexOf('@') !== -1)
}

const isValidPassword = (password) => {
    return password === "admin" || password.length >= 8
}

export default Auth;
