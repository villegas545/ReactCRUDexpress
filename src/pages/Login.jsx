import React from 'react'
import axios from 'axios'
import { Router } from 'react-router'
function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const logear = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await axios.post('http://localhost:5001/usuario', {
                usuario: username,
                contra: password
            });
            if (respuesta.data.message === 'ok') {
                Router.browserHistory.Push('/consultarproductos');
            } else {
                alert('Usuario o contraseña incorrecto')
            }
        } catch (error) {
            alert(error);
            console.log(error)
        }
    }
    return (
        <>
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Sign In</h3>
                        <div class="d-flex justify-content-end social_icon">
                            <span><i class="fab fa-facebook-square"></i></span>
                            <span><i class="fab fa-google-plus-square"></i></span>
                            <span><i class="fab fa-twitter-square"></i></span>
                        </div>
                    </div>
                    <div class="card-body">
                        <form onSubmit={e => logear(e)}>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username} />

                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <div class="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Login" class="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login
