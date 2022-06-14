// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

fearNotLetter("abce") // should return the string d.

fearNotLetter("abcdefghjklmno") // should return the string i.

fearNotLetter("stvwx") // should return the string u.

fearNotLetter("bcdf") // should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i < str.length ; i++){
      if(str[i] !== alphabet[alphabet.indexOf(str[0])+i]){
        return alphabet[alphabet.indexOf(str[0])+i]
      }
    }
    return undefined;
  }
  
  
  console.log(fearNotLetter("abce"))
  console.log(fearNotLetter("stvwx"))