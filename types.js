function createType(name, type) {
 return type 
}

function checkType(var, type) {
if (typeof var !== type) {
console.log("Types dont match");
throw new Error("Type is wrong")
}
}

export { createType, checkType}
