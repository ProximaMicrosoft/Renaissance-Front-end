export function getFirstName(name: string | undefined) {
    const indexEmpty = name?.indexOf(' ');
    if (name && indexEmpty !== -1)
        return name.substring(0, indexEmpty);
    else if (name && indexEmpty === -1)
        return name;
}