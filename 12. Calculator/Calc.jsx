
function add(a, b) {
    let sum = a + b;
    return sum;
}

function sub(a, b) {
    let diff = a - b;
    return diff;
}

function mul(a, b) {
    let mul = a * b;
    return mul;
}

function div(a, b) {
    let div = a / b;
    div = div.toFixed(2); //till 2 decimal places
    return div;
}

// export default add;
export {add,sub,mul,div};
