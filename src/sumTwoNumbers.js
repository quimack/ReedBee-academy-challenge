const sum = (a, b) =>{
    let result = '';
    const aux = 0;

//optional solution for null parameter
    if(b===null){
        result = a+aux;
    }else if(a===null){
        result = b+aux;
    }
    else{
        result = a+b;      //solution for happy path
    }
    return result
}

module.exports={
    sum
}   