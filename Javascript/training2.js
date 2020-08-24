var firstFunction = function () {
    console.log('print some values');
};
var printFunction = function (value, callback) {
    // calling the call back function
    callback();
    console.log('printing the argument value >>', value);
};
printFunction('Training', firstFunction);
