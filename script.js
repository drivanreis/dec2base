function convertDecimalToBase() {
    const decimalInput = document.getElementById('decimalInput').value;
    const baseInput = document.getElementById('baseInput').value;

    const result = decimalToBase(decimalInput, baseInput);
    document.getElementById('result').textContent = result;

    // Calcular e exibir a quantidade de dígitos do número decimal
    const decimalDigits = decimalInput.length;
    document.getElementById('decimalDigits').textContent = decimalDigits;

    // Calcular e exibir a quantidade de dígitos do número convertido
    const convertedDigits = result.length;
    document.getElementById('convertedDigits').textContent = convertedDigits;
}

function decimalToBase(decimal, base) {
    if (decimal === '0') return '0';

    decimal = BigInt(decimal);
    base = parseInt(base);
    
    let result = '';

    while (decimal > 0n) {
        let remainder = decimal % BigInt(base);
        if (remainder < 10n) {
            result = remainder.toString() + result;
        } else {
            result = String.fromCharCode(Number(remainder) + 55) + result;
        }
        decimal = decimal / BigInt(base);
    }
    
    return result;
}
