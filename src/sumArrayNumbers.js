const sumArray = (array) =>{
    let result = 0; // for empty array
    for(const num of array){
        result += num
    }
    return result;
}

module.exports={
    sumArray
}