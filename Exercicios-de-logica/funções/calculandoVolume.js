function calcVolume(raio) {
    let volume = (4 * 3.14 * Math.pow(raio, 3)) / 3;
    
    return `O volume da esfera é igual a ${volume.toFixed(1)}`;
};

console.log(calcVolume(5));