const accountId = 123456;
let accountEmail = "vaibhav@gmail.com";
var accountPassword = "13456";
accountCity = "jaipur"
let accountState;
console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountCity]);

/* investigation
1) dont use var keyword because of scope revolution issue;
2)once you declared variable as const you cant chnage its value, if you tru it will give you error;
3)if variables is not intialize then it has valu undefined
4)you you want to print all the variables at one shot then use console.log table
*/

