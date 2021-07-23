export function login(user: UserProps) {
    localStorage.setItem("userData", JSON.stringify(user))
}

export function logout() {
    localStorage.removeItem("userData")
}