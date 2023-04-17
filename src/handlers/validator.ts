export const validate = function(input:string) 
{
    const forbiddenInput = /[\\\^\-\][?$"(){}]/
    return !forbiddenInput.test(input);
}
