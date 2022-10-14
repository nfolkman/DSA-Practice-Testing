/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

    // for-loop solution  O(N)  (80% FASTER)
function vowelsCounter(text) {
    let count = 0

    for(let char of text){
        if(char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') count++
    }
    return count
}


    // regex solution
    function vowelsCounter(text){
        // set matching instances
        let matchingInstances = text.match(/[aeiou]/gi)

        // check if matching instances exist
        if(matchingInstances) return matchingInstances.length
        else return 0
    }



module.exports = vowelsCounter;
