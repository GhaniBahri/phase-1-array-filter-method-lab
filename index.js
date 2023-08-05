// Code your solution here
function findMatching(arr, name){
    return arr.filter(el=> (el.toLowerCase() === name.toLowerCase()))
}

function fuzzyMatch(arr ,str){
    return arr.filter(el=> el.startsWith(str))
}

function matchName(arr, name){
    return arr.filter(el=>(el.name === name))
}