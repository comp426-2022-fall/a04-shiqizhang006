export default function roll(sideCount, diceCount, rollsCount){
    var output = [];
    for(var i = 0; i < rollsCount; i++){
        output[i] = Math.floor(Math.random() * sideCount) + 1;
    }
    return {
        sides: sideCount,
        dice: diceCount,
        rolls: rollsCount,
        results: output
    }
}