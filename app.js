//ability to send arbitrary number of arguments inside a function


//ES5
function isFullAge5(limit) {
    // console.log(arguments);
    //convert to array
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function (cur) {
        console.log((2019 - cur) >= limit);
    })
}

//the first argument is our condition
isFullAge5(30, 1990, 1999, 1965);


//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

//now using the dynamic condition...limit
//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);