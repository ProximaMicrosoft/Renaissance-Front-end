export function destructuringDate(dateValue: string) {
    return new Date(
        parseInt(dateValue.substring(4, 7)),
        parseInt(dateValue.substring(2, 3)),
        parseInt(dateValue.substring(0, 1))
    )
}

export function destructuringDateForInput(dateValue: string) {
    return new Date(
        parseInt(dateValue.substring(0, 3)),
        parseInt(dateValue.substring(5, 6)),
        parseInt(dateValue.substring(8, 9))
    )
}