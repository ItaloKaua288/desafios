function convert(graus) {
    const celsiusExist = graus.toUpperCase().includes('C')
    const fahrenheitExist = graus.toUpperCase().includes('F')

    if (!celsiusExist && !fahrenheitExist) {
        throw new Error('Digite um grau válido')
    }

    if (fahrenheitExist) {
        celsius = (Number(graus.toUpperCase().split('F')[0]) - 32) * 5/9
        console.log(`${celsius.toFixed(1)}°C`)
    } else if (celsiusExist) {
        fahrenheit = Number(graus.toUpperCase().split('C')[0]) * 9/5 + 32
        console.log(`${fahrenheit.toFixed(1)}°F`)
    }
}

try {
    convert('50F')
} catch (e) {
    console.log(e.message)
}