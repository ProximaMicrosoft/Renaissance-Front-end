export function getFirstName(name: string | undefined) {
    const indexEmpty = name?.indexOf(' ');
    if (name)
        return name.substring(0, indexEmpty);
}