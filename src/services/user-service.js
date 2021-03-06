const USER_API = "http://localhost:7000/api/users";
// const USER_API = "http://wbdv-tongling-project-backend.herokuapp.com/api/users";

const findUserById = (uid) => {
    return fetch(`${USER_API}/${uid}`)
        .then(response => response.json())
}

const profile = () => {
    return fetch(`${USER_API}/profile`, {
        method: "POST",
        credentials: "include",
    }).then(response => response.json())
}

const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const register = (credentials) => {
    return fetch(`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const logout = () => {
    return fetch(`${USER_API}/logout`, {
        method: "POST",
        credentials: "include"
    })
        .then(response => response.json())
}

const updateProfile = (user) => {
    return fetch(`${USER_API}/${user._id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json',
            // 'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => console.log(result))
}

export default {
    register, login, logout, profile, updateProfile, findUserById
}