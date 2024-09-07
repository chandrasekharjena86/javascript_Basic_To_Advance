function sayMyName() {
  console.log("chandra");
}
// sayMyName()

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumber(num1, num2) {

    // let result=num1+num2
    // return result
return num1+num2    
    

}
const result = addTwoNumber(3, 5);
// console.log("result", result);


function loginUserMessage(username="sam"){      //the sam name pass the function can not show undefine

    if(username===undefined){             //(!username) the result willl be same
        console.log("please enter yr user name");
        return
    }
    return`${username}just logged in`
}
// console.log(loginUserMessage("chandra"))
console.log(loginUserMessage("sekakhd"));      //the blank argument pass will be undefind pass through the user name they overwrite the function