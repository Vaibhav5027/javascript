// sysntax
condition = true;
condition1 = true;
condition2 = true;
if (condition) {
    console.log("true");
}
else {
    console.log("false");

}

//Multiple condition
if (condition) {
    console.log("true");

}
else if (condition1) {
    console.log("true");
}
else if (condition2) {
    console.log("true");
}
else {
    console.log("false");
}

const key = 3;
switch (key) {
    case 1: {
        console.log("first case");
        break;
    }
    case 2: {
        console.log("second case");
        break;
    }
    case 3: {
        console.log("third case");
        break;
    }
    default: {
        console.log("default case");

    }
}

//for multiple conditon we can use && and || operator

/*******nullish coelscing operator........... */
// this operator we use if we dont want to assign null or undefined value to variable which 
// cause theissue later in program

// let val;
//  val = 5;
// console.log(val);

//let consider scinarion in which val is comming from 3 party in this case may be its gives a null value so 
//avoid such scinaro we can use nullish operator


let val;
val = null ?? 10;
console.log(val); // it will take 10 as its value


/******************** Ternary Operator*******************/

val >= 10 ? console.log("true") : console.log("false");
;
