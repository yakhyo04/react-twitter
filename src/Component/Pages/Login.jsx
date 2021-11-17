import useAuth from '../Hooks/useAuth'
import './Login.scss';
import Twitter from '../Assets/Image/Twitter.svg';

function Login(){

    const [token, setToken] = useAuth()

    return(
        <div className="login">

            {/* <h1>Login</h1> */}
            

            <div className="login__div">
                <img className="login__img" src={Twitter} alt="" />
                <h1 className="login__title">Log in to Twitter</h1>
                <form className="login__form">
                    <input className="login__input" type="text" placeholder="Phone number, email address" />
                    <input className="login__input" type="password" placeholder="Password" />
                    <br />
                    {/* <a href="#" >Log in</a>  */}
                    <a href="#" className="login__btn" onClick={() =>{
                    setToken('lol')
                    }}>Log in</a>
                </form>
                <ul className="login__list">
                    <li className="login__item"><a className="login__link" href="#">Forgot password?</a></li>
                    <li className="login__item"><a className="login__link" href="#">Sign up to Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Login