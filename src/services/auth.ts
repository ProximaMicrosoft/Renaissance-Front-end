export const isAuthenticated = localStorage.getItem("TOKEN_KEY") !== null

export function login(token: string, user: object) {
    localStorage.setItem("TOKEN_KEY", token)
    localStorage.setItem("userData", JSON.stringify(user))
}

export function logout() {
    localStorage.removeItem("TOKEN_KEY")
    localStorage.removeItem("userData")
}