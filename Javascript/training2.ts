const firstFunction = () => {
    console.log('print some values');
};

const printFunction = (value, callback?) => {

    // calling the call back function
    callback();

    console.log('printing the argument value >>', value);

    
}


printFunction('Training', firstFunction);