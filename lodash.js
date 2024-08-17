const _=require('lodash')


const arr=[1,2,3,[4,5,[12,13,14,[40,30,20,10]]]]

const arrItem=_.flattenDeep(arr);

console.log(arrItem)