
import * as $ from 'jquery'
import Vue from 'vue'
declare var window;

let aa = new Vue({
    el: 'body',
    data: {
        content: 'dddd'
    },
    mounted: () => {

    },
    methods: {
        add: () => {
            debugger
            window.aa = 'aa';
            let promise = myAwesomeFunction();
            promise.then((result) => console.log(result));
            aa.content = 'aaa';
        }
    }
});

async function mySecondFunction(x: number) {
    setTimeout(() => { }, 100);
    return 2 + x;
}

async function myThirdNestedFunction(x: number) {
    setTimeout(() => { }, 100);
    return 3 + x;
}

async function myAwesomeFunction() {
    let startingValue = 1;
    // we can await the call to mySecondFunction() as this 
    // returns a promise that will eventually return
    // our firstResult
    let firstResult = await mySecondFunction(startingValue);
    // once mySecondFunction has resolve, our function will
    // carry on execution of myThirdNestedFunction
    let finalResult = await myThirdNestedFunction(firstResult);
    // once this resolves, we get back our finalResult
    // which we can subsequently return 
    return finalResult;
}