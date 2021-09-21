/* 

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

function fahrenheitDegree(c){
    let fahrenheit;

    fahrenheit = Number(c) * 9/5 + 32;

    return fahrenheit;
}

function celsiusDegree(f){
    let celsius;

    celsius = (Number(f) - 32) * 5/9;

    return celsius;
}

function transform(temperature) {

    let celsius = (temperature.slice(-1) === 'C') || (temperature.slice(-1) === 'c')
    let fahrenheit = (temperature.slice(-1) === 'F') || (temperature.slice(-1) === 'f')

    if (celsius) {
        console.log(`${temperature.slice(0, -1)}º C para ${fahrenheitDegree(temperature.slice(0, -1))}º F`);
    } else if(fahrenheit) {
        console.log(`${temperature.slice(0, -1)}º F para ${celsiusDegree(temperature.slice(0, -1))}º C`);
    } else {
        return "Grau não identificado. Passe um valor no formato XXF ou XXC"
    }

}


transform('50c')