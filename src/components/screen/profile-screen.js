import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import userService from '../../services/user-service'

const Profile = () => {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {

        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })

    }, [])

    const history = useHistory()
    const logout = () => {
        console.log(currentUser)
        userService.logout()
            .then(() => {
                setCurrentUser({})
            })
        history.push("/")
    }

    return(
        <div>
            <Link className="fas fa-3x fa-home wbdv-color-light-salmon"
                  to="/">
            </Link>

        <div className="container">
            <br/>
            <h1 className="font-weight-bolder">Profile</h1>
            {/*{JSON.stringify(currentUser)}*/}
            <h3 className="font-weight-bolder">Welcome
                <span className="wbdv-color-light-salmon font-weight-bolder"> {currentUser.username} !</span>
            </h3>

            <br/>
            <br/>
            <br/>
            <br/>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label font-weight-bolder">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           // id="username"
                           value={currentUser.username}
                           onChange={(e) => setCurrentUser({...currentUser, username: e.target.value})}/>
                </div>
            </div>

            {
                Object.keys(currentUser).length !== 0 &&
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label font-weight-bolder">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                            // id="firstname"
                               placeholder="First name"
                               value={currentUser.firstName}
                               onChange={(e) => setCurrentUser({...currentUser, firstName: e.target.value})}/>
                    </div>
                </div>
            }

            {
                Object.keys(currentUser).length !== 0 &&
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label font-weight-bolder">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                            // id="lastname"
                               placeholder="Last name"
                               value={currentUser.lastName}
                               onChange={(e) => setCurrentUser({...currentUser, lastName: e.target.value})}/>
                    </div>
                </div>

            }

            {
                Object.keys(currentUser).length !== 0 &&
                <div className="mb-3 row">
                    <label htmlFor="phone"
                           className="col-sm-2 col-form-label font-weight-bolder">
                        Phone
                    </label>
                    <div className="col-sm-10">
                        <input type="tel"
                               className="form-control"
                               id="phone"
                               value={currentUser.phone}
                               placeholder="(555)123-4324"
                               onChange={(e) => setCurrentUser({...currentUser, phone: e.target.value})}/>
                    </div>
                </div>

            }


            <div className="mb-3 row">
                <label htmlFor="email"
                       className="col-sm-2 col-form-label font-weight-bolder">
                    Email
                </label>
                <div className="col-sm-10">
                    <input type="email"
                           className="form-control"
                           title="Please enter a valid email"
                           placeholder="Enter email"
                           id="email"
                           value={currentUser.email}
                           onChange={(e) => setCurrentUser({...currentUser, email: e.target.value})}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="role"
                       className="col-sm-2 col-form-label font-weight-bolder">
                    Role
                </label>
                <div className="col-sm-10">
                    <select id="role" className="form-control" value={currentUser.role}
                            onChange={(e) => setCurrentUser({...currentUser, role: e.target.value})}>
                        <option>BUYER</option>
                        <option>SELLER</option>
                        <option>ADMIN</option>
                    </select>
                </div>
            </div>

            {
                Object.keys(currentUser).length !== 0 &&
                <div className="mb-3 row">
                    <label htmlFor="dob"
                           className="col-sm-2 col-form-label">
                    </label>
                    <div className="col-sm-10">
                        <button onClick={() => {
                                                userService.updateProfile(currentUser)
                                                        .then(() => {
                                                            setCurrentUser(currentUser)
                                                        })
                                                // setCurrentUser(currentUser)
                                                alert("updated successfully!")
                                        }}
                                className="btn wbdv-bg-update btn-block">
                            Update
                        </button>

                        <button
                            onClick={logout}
                            className="btn wbdv-bg-logout btn-block">
                            Logout
                        </button>

                        <br/>
                        {
                            currentUser.role === "SELLER" &&
                            <Link to="/seller"
                                  className="fas fa-paperclip float-right font-weight-bolder wbdv-color-lavender wbdv-lg-text">
                                <span className="font-weight-bolder wbdv-color-lavender wbdv-view-order">
                                    &nbsp; Seller Products Management</span>
                            </Link>
                        }

                        {
                            currentUser.role === "BUYER" &&
                            <Link to="/order"
                                  className="fas fa-truck float-right font-weight-bolder wbdv-lg-text wbdv-color-lavender">
                                <span className="font-weight-bolder wbdv-color-lavender wbdv-view-order">
                                    &nbsp; View My Orders</span>
                            </Link>
                        }


                    </div>
                </div>
            }


        </div>
        </div>
    )
}

export default Profile;