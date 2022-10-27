/* CHALLENGE
Given a string of text, write an algorithm that returns the longest word in the string. 
E.g 'the ultimate guide to js algorithms' // should return 'algorithms'
*/



function longestWord(text) {
    let newArr = text.split(' ').sort((a,b)=> a.length - b.length)
  return newArr[newArr.length-1]
  }


module.exports = longestWord