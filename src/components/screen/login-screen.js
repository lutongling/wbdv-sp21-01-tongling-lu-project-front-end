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
                    alert("login failed, try again")
                } else {
                    history.push("/profile")
                }
            })
    }

    return(
        <div>
            <h1>Login</h1>
            <input
                value={credentials.username}
                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                className="form-control"
                placeholder="username"/>
            <input
                value={credentials.password}
                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                className="form-control"
                placeholder="password"/>
            <button
                onClick={login}
                className="btn btn-primary">
                Login
            </button>
            <Link to="/register">
                Register
            </Link>
        </div>
    )
}

export default Login;

// import React, {useState} from 'react'
// import {Link} from "react-router-dom";
//
// const LoginScreen = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//
//     const submit = (e) => {
//         e.preventDefault(); // advoid refresh
//     }
//     return(
//         <div>
//             <h1>
//                 Sign In
//             </h1>
//
//             <form className="form" onSubmit={submit}>
//
//                 <div className="form-group row">
//
//                     <label htmlFor="username" className="col-sm-2 col-form-label">
//                         Username
//                     </label>
//
//                     <div className="col-sm-10">
//                         <input className="form-control wbdv-field wbdv-username"
//                                id="username"
//                                required
//                                placeholder="Enter Username"
//                                onChange={(e) => {setUsername(e.target.value)}}/>
//                     </div>
//
//                 </div>
//
//                 <div className="form-group row">
//
//                     <label htmlFor="password" className="col-sm-2 col-form-label">
//                         Password
//                     </label>
//
//                     <div className="col-sm-10">
//                         <input type="password" className="form-control wbdv-field wbdv-password"
//                                id="password" placeholder="123qwe#$%"
//                                required
//                                onChange={(e) => {setPassword(e.target.value)}}/>
//                     </div>
//
//                 </div>
//
//                 <div className="form-group row">
//
//                     <label className="col-sm-2 col-form-label"></label>
//
//                     <div className="col-sm-10">
//
//                         <button className="btn btn-primary btn-block wbdv-login"
//                                 type="submit">
//                             Sign in
//                         </button>
//
//                         {/*<a className="btn btn-danger btn-block wbdv-cancel" href="../index.html">*/}
//                         {/*    Cancel*/}
//                         {/*</a>*/}
//
//                         <div className="row">
//
//                             {/*<div className="col-6">*/}
//                             {/*    <a href="#">Forgot Password?</a>*/}
//                             {/*</div>*/}
//                             <label/>
//
//                             <div className="col-12">
//                                 <Link to="/register" className="float-right">
//                                     Create Account
//                                 </Link>
//                             </div>
//
//                         </div>
//
//                     </div>
//
//                 </div>
//
//             </form>
//         </div>
//     )
// }
//
// export default LoginScreen