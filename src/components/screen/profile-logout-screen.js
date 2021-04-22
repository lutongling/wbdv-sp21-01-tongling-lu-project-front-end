import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import userService from  "../../services/user-service"

const ProfileLogout = () => {
    const {uid} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.findUserById(uid)
            .then(user => setUser(user))
    }, [uid])

    return (
        <div className="container">
            <h1>Profile for {user.username}</h1>
            <br/>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           value={user.username}
                           readOnly/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="email"
                       className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input type="email"
                           className="form-control"
                           id="email"
                           value={user.email}
                           readOnly/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="role"
                       className="col-sm-2 col-form-label">
                    Role
                </label>
                <div className="col-sm-10">
                    <input id="role" className="form-control" value={user.role} readOnly>
                    </input>
                </div>
            </div>

        </div>
    )
}

export default ProfileLogout
