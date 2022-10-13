/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Testing: https://jsbench.me/nql96erx5r/1

    // split().reverse approach = 
function reverseString(text) {
    return [...text].reverse().join('')
}
    // for loop =  O(n)  (fastest)
function reverseString(text) {

    let result = ''

    for(let i = text.length-1; i>=0; i--){
        result += text[i]
    }

    return result
}

    // recursive approach = O(n) (can stall out with larger inputs because of too many callbacks)
function reverseString(text) {
    if(text === '') return ''
    else return reverseString(text.substr(1) + text[0])
}
    // reduce approach = O(n)
function reverseString(text) {
    return text.split('').reduce((acc, char) => char + acc, '')
}



module.exports = reverseString