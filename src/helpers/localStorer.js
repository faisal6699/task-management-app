export const saveUserIdentity = (token, userId) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("userId", userId)
}

export const getUserToken = () => {
    return localStorage.getItem("userToken");
}

export const removeUserToken = () => {
    return localStorage.removeItem("userToken");
}
