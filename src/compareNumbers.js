const maxNumber = (a, b, c) =>{
    let result = "";
    let paramA = a;
    let paramB = b;
    let paramC = c;
    
    //optional solution for null parameter
    if(paramA === null){
        paramA = 0;
    }
    if(paramB === null){
        paramB = 0;
        console.log(paramB);
    }
    if(paramC === null){
        paramC = 0;
    }
    
    //comparison solution
    if(paramA>=paramB && paramA>=paramC){
        result = paramA;
    }else if(paramB>=paramA && paramB>=paramC){
        result = paramB;
    }else{
        result = paramC;
    }
    return result;
}


module.exports={
    maxNumber
}

