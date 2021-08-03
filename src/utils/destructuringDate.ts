export function destructuringDate(dateValue: string) {
    return new Date(
        parseInt(dateValue.substring(6, 9)),
        parseInt(dateValue.substring(3, 4)),
        parseInt(dateValue.substring(0, 1))
    )
}