// DNA Pairing
// Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    let arr = []
    for(let i = 0; i < str.length ; i++)
    if(str[i] == "A"){
      arr.push(["A","T"])
    } else if(str[i] == "T"){
      arr.push(["T","A"])
    } else if(str[i] == "G"){
      arr.push(["G","C"])
    } else if(str[i] == "C"){
      arr.push(["C","G"])
    }
    return arr;
  }
  
  pairElement("GCG");
  console.log(pairElement("GCG"))