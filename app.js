function encontrarPrimos(n) {
    const primos = []; 

    // Empezamos desde 2 hasta n-1, ya que 1 no es primo y buscamos menores que n
    for (let i = 2; i < n; i++) {
        if (esPrimo(i)) { // Usamos la función esPrimo para verificar si "i" es primo
            primos.push(i); // Y en dado caso que el numero sea primo, se le agrega el array
        }
    }
    return primos;
}

function esPrimo(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { // Solo se repite hasta la raíz cuadrada de numero
        if (num % i === 0) {
            return false; // Si encontramos un divisor, no es primo
        }
    }
    return true; // Si no tiene divisores, es primo :D
}
