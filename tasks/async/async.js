const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback(){
    let arg = function myFunction(str, data){
        console.log(data);
    };
    callbackFunction(arg);
}
   
/**
 * console.log data got from promiseFunction
 */

function printDataPromise() {
    let arg = promiseFunction();
    arg.then(function(data) {
        console.log(data);
    })
   }
   
/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const a = await printDataPromise()
    console.log (a);
}
/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    let arg = function myFunction(error){
        throw error;
    };
    callbackFunctionError(arg);
}
/**
 * throw error come from promiseFunctionError
 */

function handlePromiseError() {
 
    promiseFunctionError.catch(function(error) {
        throw error;
    }) 
}
/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    const a = await promiseFunctionError();
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
