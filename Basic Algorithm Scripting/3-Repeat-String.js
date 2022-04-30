function repeatStringNumTimes(str, num) {
    let multistr = ""
    while (num > 0){
      multistr += str
      num --;
    }
    return multistr
    }
    repeatStringNumTimes("abc", 3);
    console.log(repeatStringNumTimes("abc",3))