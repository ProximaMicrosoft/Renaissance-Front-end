export function destructuringDate(dateValue: string) {
    return new Date(
        parseInt(dateValue.substring(6, 9)),
        parseInt(dateValue.substring(3, 4)),
        parseInt(dateValue.substring(0, 1))
    )
}

export function structuringDate(dateValue: Date) {
    function addZero(substringValue: number) {
        return (substringValue <= 9 && `0${substringValue}`) || substringValue.toString()
    }

    return `${addZero(dateValue.getDate())}/${addZero(dateValue.getMonth() + 1)}/${dateValue.getFullYear()}`
}