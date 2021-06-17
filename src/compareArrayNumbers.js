const maxArray = (a, b) =>{
    let maxNumber = "";
    let newArray = [];

    for(let i = 0; i < a.length || i < b.length; i++){
        if(a[i] && a[i] >= b[i]){
            maxNumber = a[i];
        }else if(b[i]){
            maxNumber = b[i];
        }else{
            maxNumber = a[i];
        }
        newArray.push(maxNumber);
    }
    return newArray;
}

module.exports={
    maxArray
}