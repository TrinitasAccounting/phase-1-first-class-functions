

const testFunc = () => {
    return '';
}

const testFunc3 = () => {
    return '';
}

const testFunc2 = () => {
    return testFunc;
}


const receivesAFunction = (testFunc) => {
    testFunc();
}


const returnsANamedFunction = () => {
    return testFunc;
}


const returnsAnAnonymousFunction = () => {
    return testFunc2();
}
