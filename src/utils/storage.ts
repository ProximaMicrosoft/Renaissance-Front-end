export function saveStorage(name: string, object: any) {
    localStorage.setItem(name, JSON.stringify(object));
}

export function removeStorage(name: string) {
    localStorage.removeItem(name);
}

export function getStorage(name: string) {
    const value = localStorage.getItem(name)
    return value !== null && JSON.parse(value);
}