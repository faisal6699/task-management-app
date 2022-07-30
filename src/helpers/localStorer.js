export const saveUserIdentity = (token, userName) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("userName", userName)
}

export const getUserToken = () => {
    return localStorage.getItem("userToken");
}

export const removeUserToken = () => {
    return localStorage.removeItem("userToken");
}

export const getUserName = () => {
    return localStorage.getItem("userName")
}


export const removeUserName = () => {
    return localStorage.removeItem("userName")
}