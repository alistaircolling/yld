export class Lazy {

    constructor(){

        this.functions = []; 

    }

    // the first item is always a function, the rest are optional
    // arguments that are passed to the function when it is executed
    // **before** the argument passed in evaluate()

    add(...args){
        //add to the start of the array so we can iterate forwards
        this.functions.push(args);
        return this;
    }


    // Returns an array containing the result of
    // applying the chain of functions to the array target.

    evaluate(){
        const results = [];
        let targets = arguments[0];
        let currentResult;

        // iterate through each target value
        targets.forEach( target => {

            currentResult = target;
            let passedFunctions = this.functions;
            passedFunctions.forEach( functionItem => {

                // get the first item from the functionItem array
                // leave other items remaining if there are any

                const functionToCall = functionItem.splice(0, 1);

                // need to make an array from additional arguments passes
                let paramsToPass = [currentResult, ...functionItem];
                currentResult = functionToCall[0].apply(null, paramsToPass);

                /* debugger;*/
            });

            results.push(currentResult);
        })

        return results;

    }
}
