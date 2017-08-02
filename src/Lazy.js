export class Lazy {

    constructor(){

        this.items = []; 
        //receives 1 or more arguments, fn and also arguments to provide when called

    }

    // the first item is always a function, the rest are optional
    // arguments that are passed to the function when it is executed
    // **before** the argument passed in evaluate()

    add(...args){
        //add to the start of the array so we can iterate forwards
        this.items.unshift(args);
        console.log(this.items);
        return this;
    }


    // Returns an array containing the result of
    // applying the chain of functions to the array target.

    evaluate(...args){
        const results = [];

        //iterate through each target value
        let targets = arguments[0];

        targets.forEach( target => {

            //iterate through each function already passed in order they were passed
            this.items.forEach( functionItem => {

                //iterate through each functionItem to see if there are any additional properties
                const functionToCall = functionItem[0];
                debugger;
                let result = functionToCall.apply(target);
                results.push(result);
            });

        });
        return results;
    }
}
