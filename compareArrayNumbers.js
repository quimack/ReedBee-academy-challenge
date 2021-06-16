const maxArray = (a, b) =>{
    let maxNumber = "";
    let newArray = [];
    for(let i = 0; i < a.length && i < b.length; i++){
        if(a[i] >= b[i]){
            maxNumber = a[i];
        }else{
            maxNumber = b[i];
        }
        newArray.push(maxNumber);
    }
    return newArray;
}

