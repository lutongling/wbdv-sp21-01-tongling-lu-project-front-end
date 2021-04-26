import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../../services/user-service'

const Register = () => {
    const [credentials, setCredentials] = useState({username: '', password: '', role: 'BUYER'})
    const history = useHistory()
    const register = () => {
        userService.register(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("username already taken")
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
            <h1 className="font-weight-bolder">Register</h1>
            <br/>
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

            <br/>
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

            <div className="mb-3 row">
                <label htmlFor="role"
                       className="col-sm-2 col-form-label font-weight-bolder">
                    Role
                </label>
                <div className="col-sm-10">
                    <select id="role" className="form-control"
                            onChange={(e) => setCredentials({...credentials, role: e.target.value.toString()})}>
                        <option>BUYER</option>
                        <option>SELLER</option>
                        <option>ADMIN</option>
                    </select>
                </div>
            </div>

            <br/>
            <button onClick={register} className="btn btn-primary">
                Register
            </button>

            <Link className="float-right font-weight-bolder text-info" to="/login">
                Login
            </Link>
        </div>
        </div>
    )
}

export default Register;