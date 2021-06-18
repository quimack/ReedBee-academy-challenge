const assert = require('chai').assert

const sumOperation = require('../src/sumTwoNumbers.js');
const sumArrayOperation = require('../src/sumArrayNumbers.js');
const compareOperation = require('../src/compareNumbers.js');
const compareArrayOperation = require('../src/compareArrayNumbers.js');

// TEST sumOperation
it('Test camino feliz', ()=>{
    const result = sumOperation.sum(3,2)
    assert.equal(5, result);
})

it('Test camino feliz', ()=>{
    const result = sumOperation.sum(3,2)
    assert.isNotNull(result,"El resultado no puede ser null");
})

it('Test primer parámetro nulo', ()=>{
    const result = sumOperation.sum(null,2)
    assert.equal(2,result);
})

it('Test primer parámetro nulo', ()=>{
    const result = sumOperation.sum(null,2)
    assert.isNotNull(result,"El resultado no puede ser null");
})
it('Test segundo parámetro nulo', ()=>{
    const result = sumOperation.sum(2, null)
    assert.equal(2,result);
})

it('Test segundo parámetro nulo', ()=>{
    const result = sumOperation.sum(2, null)
    assert.isNotNull(result, "El resultado no puede ser null");
})

// TEST sumArrayOperation

it('Test camino feliz', ()=>{
    const result = sumArrayOperation.sumArray([1,2,3]);
    assert.equal(6, result);
})

it('Test camino feliz', ()=>{
    const result = sumArrayOperation.sumArray([1,2,3]);
    assert.isNotNull(result, "El resultado no puede ser null");
})
it('Test array vacío', ()=>{
    const result = sumArrayOperation.sumArray([]);
    assert.equal(0, result);
})
it('Test array vacío', ()=>{
    const result = sumArrayOperation.sumArray([]);
    assert.isNotNull(result, "El resultado no puede ser null");
})

//TEST compareNumbers
it('Test camino feliz', ()=>{
    const result = compareOperation.maxNumber(1,3,2);
    assert.equal(3, result);
})
it('Test camino feliz', ()=>{
    const result = compareOperation.maxNumber(1,3,2);
    assert.isNotNull(result, "El resultado no puede ser null");
})
it('Test camino feliz', ()=>{
    const result = compareOperation.maxNumber(3,1,2);
    assert.equal(3, result);
})
it('Test camino feliz', ()=>{
    const result = compareOperation.maxNumber(3,1,2);
    assert.isNotNull(result, "El resultado no puede ser null");
})
it('Test camino feliz', ()=>{
    const result = compareOperation.maxNumber(1,2,3);
    assert.equal(3, result);
})
it('Test camino feliz', ()=>{
    const result = compareOperation.maxNumber(1,2,3);
    assert.isNotNull(result, "El resultado no puede ser null");
})
it('Test parametros iguales', ()=>{
    const result = compareOperation.maxNumber(1,1,1);
    assert.equal(1, result);
})
it('Test parametros iguales', ()=>{
    const result = compareOperation.maxNumber(1,1,1);
    assert.isNotNull(result, "El resultado no puede ser null");
})
it('Test parametros nulos', ()=>{
    const result = compareOperation.maxNumber(null,2,null);
    assert.equal(2, result);
})
it('Test parametros nulos', ()=>{
    const result = compareOperation.maxNumber(null,2,null);
    assert.isNotNull(result, "El resultado no puede ser null");
})

// TEST compareArrayNumbers
it('Test camino feliz', ()=>{
    const result = compareArrayOperation.maxArray([1,2,4],[5,5,5])
    assert.equal(5, result[0]);
})
it('Test camino feliz', ()=>{
    const result = compareArrayOperation.maxArray([1,2,4],[5,5,5])
    assert.equal(5, result[1]);
})
it('Test camino feliz', ()=>{
    const result = compareArrayOperation.maxArray([1,2,4],[5,5,5])
    assert.equal(5, result[2]);
})
it('Test camino feliz', ()=>{
    const result = compareArrayOperation.maxArray([5,1,5],[1,5,1])
    assert.equal(5, result[0]);
})
it('Test camino feliz', ()=>{
    const result = compareArrayOperation.maxArray([5,1,5],[1,5,1])
    assert.equal(5, result[1]);
})
it('Test camino feliz', ()=>{
    const result = compareArrayOperation.maxArray([5,1,5],[1,5,1])
    assert.equal(5, result[2]);
})
it('Test longitud de arrays diferente', ()=>{
    const result = compareArrayOperation.maxArray([5,1],[1,5,1])
    assert.equal(5, result[0]);
})
it('Test longitud de arrays diferente', ()=>{
    const result = compareArrayOperation.maxArray([5,1],[1,5,1])
    assert.equal(5, result[1]);
})
it('Test longitud de arrays diferente', ()=>{
    const result = compareArrayOperation.maxArray([5,1],[1,5,1])
    assert.equal(1, result[2]);
})
it('Test longitud de arrays diferente', ()=>{
    const result = compareArrayOperation.maxArray([5,1,1],[1,5])
    assert.equal(1, result[2]);
})