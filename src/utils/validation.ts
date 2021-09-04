export function validateCpf(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function validateBorn(born: string) {
    born = born.replace(/[^\d]/g, "");

    return born.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
}

export function validatePhone(phone: string) {
    phone = phone.replace(/[^\d]/g, "");

    return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
}
