import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'

const Login = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()
    const login = () => {
        userService.login(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("login failed, incorrect username or password!")
                } else {
                    history.push("/profile")
                }
            })
    }

    return(
        <div>

            <Link className="fas fa-3x fa-home wbdv-color-light-salmon"
                  to="/">
            </Link>

        <div className="container">
            <br/>
            <h1 className="font-weight-bolder">Login</h1>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label font-weight-bolder">
                    Username
                </label>
                <div className="col-sm-10">
                    <input
                        value={credentials.username}
                        onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                        className="form-control"
                        placeholder="username"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label font-weight-bolder">
                    Password
                </label>
                <div className="col-sm-10">
                    <input
                        value={credentials.password}
                        onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                        className="form-control"
                        placeholder="password"/>
                </div>
            </div>

            <br/>
            <button
                onClick={login}
                className="btn btn-primary">
                Login
            </button>

            <Link to="/register"
                  className="float-right font-weight-bolder text-success">
                Register
            </Link>
        </div>
        </div>
    )
}

export default Login;