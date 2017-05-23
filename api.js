/*
Acadgild Angular Assignment 3.1b, "ES6 Part 2", destructuring
Student: Michele Cannito
Create an object apiDetail which should contain:
● baseUrl
● Method
● Request api parameter (i.e. /user)
● Header
● Post data if method is post
Pass that object in function that makes an API call.
*/

// Create apiDetail object
let apiDetail = {
    baseUrl: 'www.acadgild.com/api',
    method: 'POST',
    requestParam: '/user',
    header: 'some value',
    data: 'some data'
};

// Create function to make API call. Pass in an apiDetail object as parm config.
function makeAjaxRequest(config){

    // Destructuring available in ES6: break config parm down into parts
    let { baseUrl, method, requestParam, header, data } = config;

    // Use parts in $.ajax request 
    $.ajax(baseUrl, method, requestParam, header, data);

    // Extra: Use template interpolation for descriptive output
    console.log(` url: ${baseUrl} \n 
                 methodType: ${method} \n 
                 param: ${requestParam} \n 
                 header: ${header} \n 
                 data: ${data}`);
}

// Call function
makeAjaxRequest(apiDetail); 