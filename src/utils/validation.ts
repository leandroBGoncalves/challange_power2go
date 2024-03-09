export function validation(inputValue: string): boolean {
    // Verifica se o input é válido e tem o comprimento adequado
    return /^[\p{L} \-']+$/u.test(inputValue) && inputValue.length > 0 && inputValue.length <= 100;
}